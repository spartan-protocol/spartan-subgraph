import { BigInt } from "@graphprotocol/graph-ts";
import {
  AddLiquidity,
  RemoveLiquidity,
  Swapped,
  MintSynth,
  BurnSynth,
} from "../generated/PoolFactory/Pool";
import {
  PoolFactory,
  Pool,
  LiqAdd,
  LiqRemove,
  Swap,
  Member,
} from "../generated/schema";
import { addr_poolFactory, stableCoins, ZERO_BD } from "./const";
import {
  checkMember,
  fetchTokenAddr,
  fetchTokenName,
  fetchTokenSymbol,
  getDerivedSparta,
  loadTransaction,
  sync,
  updateDayMetrics,
  updateSpartaPrice,
  updateTVL,
} from "./utils";

export function handleAddLiquidity(event: AddLiquidity): void {
  // MAKE SURE TO LOAD AND CHECK POOL BEFORE LIQUIDITY ADD
  // IF POOL DOESNT EXIST; HAND TOKEN AND POOL ADDRESSES TO handleCreatePool()
  // This is due to the fact that liquidity is added to a pool before the createPool event is emitted when using createPoolADD()
  // After redeploy; remove that logic though; have moved the createPool event above the liqAdd for the next deploy
  let poolAddress = event.address.toHexString();
  let pool = Pool.load(poolAddress);
  // Create Pool if non-existent
  if (!pool) {
    let tokenAddr = fetchTokenAddr(event.address);
    pool = new Pool(poolAddress);
    pool.token0 = tokenAddr.toHexString();
    pool.genesis = event.block.timestamp;
    pool.symbol = fetchTokenSymbol(tokenAddr) + "-SPP";
    pool.name = fetchTokenName(tokenAddr) + "-SpartanProtocolPool";
    pool.decimals = BigInt.fromI32(18);
    pool.totalSupply = ZERO_BD;
    pool.baseAmount = ZERO_BD;
    pool.tokenAmount = ZERO_BD;
    pool.fees = ZERO_BD;
    pool.feesUSD = ZERO_BD;
    pool.stablecoin = stableCoins.includes(tokenAddr.toHexString());
    pool.tvlSPARTA = ZERO_BD;
    pool.tvlUSD = ZERO_BD;
  }

  let inputBase = event.params.inputBase.toBigDecimal();
  let inputToken = event.params.inputToken.toBigDecimal();
  let unitsIssued = event.params.unitsIssued.toBigDecimal();

  pool.baseAmount = pool.baseAmount.plus(inputBase);
  pool.tokenAmount = pool.tokenAmount.plus(inputToken);
  pool.totalSupply = pool.totalSupply.plus(unitsIssued);

  pool.save(); // Save pool before updating pricing so that even the initial liqAdd gives a valid value
  updateSpartaPrice();
  let poolFactory = PoolFactory.load(addr_poolFactory);

  let transaction = loadTransaction(event);
  let liqAdd = new LiqAdd(
    transaction.id.toString() + "#" + event.logIndex.toString()
  );
  liqAdd.transaction = transaction.id;
  liqAdd.logIndex = event.logIndex;
  liqAdd.timestamp = transaction.timestamp;
  liqAdd.pool = pool.id;
  liqAdd.token = pool.token0;
  checkMember(event.params.member.toHexString());
  liqAdd.member = event.params.member.toHexString();
  liqAdd.origin = event.transaction.from;
  liqAdd.inputBase = inputBase;
  liqAdd.inputToken = inputToken;
  liqAdd.unitsIssued = unitsIssued;
  liqAdd.derivedSparta = getDerivedSparta(inputBase, inputToken, pool.id);
  liqAdd.derivedUSD = liqAdd.derivedSparta.times(poolFactory.spartaDerivedUSD);

  let member = Member.load(event.params.member.toHexString());
  member.liqNetSparta = member.liqNetSparta.minus(liqAdd.derivedSparta);
  member.liqNetUSD = member.liqNetSparta.minus(liqAdd.derivedUSD);

  liqAdd.save();
  member.save();
  updateTVL(pool.id);
}

export function handleRemoveLiquidity(event: RemoveLiquidity): void {
  let poolFactory = PoolFactory.load(addr_poolFactory);
  let poolAddress = event.address.toHexString();
  let pool = Pool.load(poolAddress);

  let inputUnits = event.params.unitsClaimed.toBigDecimal();
  let outputBase = event.params.outputBase.toBigDecimal();
  let outputToken = event.params.outputToken.toBigDecimal();

  pool.baseAmount = pool.baseAmount.minus(outputBase);
  pool.tokenAmount = pool.tokenAmount.minus(outputToken);
  pool.totalSupply = pool.totalSupply.minus(inputUnits);

  let transaction = loadTransaction(event);
  let liqRemove = new LiqRemove(
    transaction.id.toString() + "#" + event.logIndex.toString()
  );
  liqRemove.transaction = transaction.id;
  liqRemove.logIndex = event.logIndex;
  liqRemove.timestamp = transaction.timestamp;
  liqRemove.pool = pool.id;
  liqRemove.token = pool.token0;
  checkMember(event.params.member.toHexString());
  liqRemove.member = event.params.member.toHexString();
  liqRemove.origin = event.transaction.from;
  liqRemove.inputLPs = inputUnits;
  liqRemove.outputToken = outputToken;
  liqRemove.outputSparta = outputBase;
  liqRemove.derivedSparta = getDerivedSparta(outputBase, outputToken, pool.id);
  liqRemove.derivedUSD = liqRemove.derivedSparta.times(
    poolFactory.spartaDerivedUSD
  );

  let member = Member.load(event.params.member.toHexString());
  member.liqNetSparta = member.liqNetSparta.plus(liqRemove.derivedSparta);
  member.liqNetUSD = member.liqNetSparta.plus(liqRemove.derivedUSD);

  pool.save();
  updateSpartaPrice();
  liqRemove.save();
  member.save();
  updateTVL(pool.id);
}

export function handleSwapped(event: Swapped): void {
  let poolFactory = PoolFactory.load(addr_poolFactory);
  let poolAddress = event.address.toHexString();
  let pool = Pool.load(poolAddress);

  let input = event.params.inputAmount.toBigDecimal();
  let outputAddr = event.params.tokenTo;
  let output = event.params.outputAmount.toBigDecimal();
  let member = event.params.recipient.toHexString();
  let fee = event.params.fee.toBigDecimal();
  let fromSparta = pool.token0 == outputAddr.toHexString();

  if (fromSparta) {
    pool.baseAmount = pool.baseAmount.plus(input);
    pool.tokenAmount = pool.tokenAmount.minus(output);
  } else {
    pool.tokenAmount = pool.tokenAmount.plus(input);
    pool.baseAmount = pool.baseAmount.minus(output);
  }
  pool.fees = pool.fees.plus(fee);
  pool.feesUSD = pool.feesUSD.plus(fee.times(poolFactory.spartaDerivedUSD));

  let transaction = loadTransaction(event);
  let swap = new Swap(
    transaction.id.toString() + "#" + event.logIndex.toString()
  );
  swap.transaction = transaction.id;
  swap.logIndex = event.logIndex;
  swap.timestamp = transaction.timestamp;
  swap.pool = pool.id;
  swap.token = pool.token0;
  checkMember(member);
  swap.member = member;
  swap.origin = event.transaction.from;
  swap.fromSparta = fromSparta;
  swap.input = input;
  swap.output = output;
  swap.derivedSparta = getDerivedSparta(
    fromSparta ? input : ZERO_BD,
    fromSparta ? ZERO_BD : input,
    pool.id
  );
  swap.derivedUSD = swap.derivedSparta.times(poolFactory.spartaDerivedUSD);

  let memberLoaded = Member.load(member);
  memberLoaded.fees = memberLoaded.fees.plus(fee);

  pool.save();
  updateSpartaPrice();
  swap.save();
  memberLoaded.save();
  updateTVL(pool.id);
  updateDayMetrics(
    swap.timestamp,
    pool.id,
    swap.derivedSparta,
    swap.derivedUSD,
    fee,
    fee.times(poolFactory.spartaDerivedUSD)
  );
}

// UNCOMMENT BELOW ONCE NEW POOL CONTRACT DEPLOYED WITH CHANGED EVENTS
// DELETE SYNC() AS WELL!
export function handleMintSynth(event: MintSynth): void {
  let poolAddress = event.address;
  sync(poolAddress);

  // let poolFactory = PoolFactory.load(addr_poolFactory);
  // let poolAddress = event.address.toHexString();
  // let pool = Pool.load(poolAddress);

  // let member = event.params.member.toHexString();
  // let inputBase = event.params.baseAmount.toBigDecimal();
  // let liqUnits = event.params.liqUnits.toBigDecimal();
  // let outputSynth = event.params.synthAmount.toBigDecimal();
  // let fee = event.params.fee.toBigDecimal();

  // pool.baseAmount = pool.baseAmount.plus(inputBase);
  // pool.totalSupply = pool.totalSupply.plus(liqUnits);
  // pool.fees = pool.fees.plus(fee);

  // let transaction = loadTransaction(event);
  // let mintSynth = new MintSynth(
  //   transaction.id.toString() + "#" + event.logIndex.toString()
  // );
  // mintSynth.transaction = transaction.id;
  // mintSynth.logIndex = event.logIndex;
  // mintSynth.timestamp = transaction.timestamp;
  // mintSynth.pool = pool.id;
  // mintSynth.token = pool.token0;
  // checkMember(member);
  // mintSynth.member = member;
  // mintSynth.origin = event.transaction.from;
  // mintSynth.inputSparta = inputBase;
  // mintSynth.mintedSynths = outputSynth;
  // mintSynth.derivedUSD = mintSynth.inputSparta.times(
  //   poolFactory.spartaDerivedUSD
  // );

  // let memberLoaded = Member.load(member);
  // memberLoaded.fees = memberLoaded.fees.plus(fee);

  // pool.save();
  // updateSpartaPrice();
  // mintSynth.save();
  // memberLoaded.save();
  // updateTVL(); // ADD IN THE ARGS
  // updateDayMetrics() // ADD IN THE ARGS
}

// UNCOMMENT BELOW ONCE NEW POOL CONTRACT DEPLOYED WITH CHANGED EVENTS
// DELETE SYNC() AS WELL!
export function handleBurnSynth(event: BurnSynth): void {
  let poolAddress = event.address;
  sync(poolAddress);

  // let poolFactory = PoolFactory.load(addr_poolFactory);
  // let poolAddress = event.address.toHexString();
  // let pool = Pool.load(poolAddress);

  // UNCOMMENT BELOW ONCE NEW POOL CONTRACT DEPLOYED WITH CHANGED EVENTS
  // let member = event.params.member.toHexString();
  // let inputSynth = event.params.synthAmount.toBigDecimal();
  // let liqUnits = event.params.liqUnits.toBigDecimal();
  // let outputBase = event.params.baseAmount.toBigDecimal();
  // let fee = event.params.fee.toBigDecimal();

  // pool.totalSupply = pool.totalSupply.minus(liqUnits);
  // pool.baseAmount = pool.baseAmount.minus(outputBase);
  // pool.fees = pool.fees.plus(fee);

  // let transaction = loadTransaction(event);
  // let burnSynth = new MintSynth(
  //   transaction.id.toString() + "#" + event.logIndex.toString()
  // );
  // burnSynth.transaction = transaction.id;
  // burnSynth.logIndex = event.logIndex;
  // burnSynth.timestamp = transaction.timestamp;
  // burnSynth.pool = pool.id;
  // burnSynth.token = pool.token0;
  // checkMember(member);
  // burnSynth.member = member;
  // burnSynth.origin = event.transaction.from;
  // burnSynth.outputSparta = outputBase;
  // burnSynth.burnedSynths = inputSynth;
  // burnSynth.derivedUSD = burnSynth.outputSparta.times(
  //   poolFactory.spartaDerivedUSD
  // );

  // let memberLoaded = Member.load(member);
  // memberLoaded.fees = memberLoaded.fees.plus(fee);

  // pool.save();
  // updateSpartaPrice();
  // burnSynth.save();
  // memberLoaded.save();
  // updateTVL(); // ADD IN THE ARGS
  // updateDayMetrics() // ADD IN THE ARGS
}