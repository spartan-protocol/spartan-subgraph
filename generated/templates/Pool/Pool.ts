// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddLiquidity extends ethereum.Event {
  get params(): AddLiquidity__Params {
    return new AddLiquidity__Params(this);
  }
}

export class AddLiquidity__Params {
  _event: AddLiquidity;

  constructor(event: AddLiquidity) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get inputBase(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get inputToken(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get unitsIssued(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BurnSynth extends ethereum.Event {
  get params(): BurnSynth__Params {
    return new BurnSynth__Params(this);
  }
}

export class BurnSynth__Params {
  _event: BurnSynth;

  constructor(event: BurnSynth) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get synthAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get baseAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get liqUnits(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get synthAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class MintSynth extends ethereum.Event {
  get params(): MintSynth__Params {
    return new MintSynth__Params(this);
  }
}

export class MintSynth__Params {
  _event: MintSynth;

  constructor(event: MintSynth) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get synthAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get baseAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get liqUnits(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get synthAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class RemoveLiquidity extends ethereum.Event {
  get params(): RemoveLiquidity__Params {
    return new RemoveLiquidity__Params(this);
  }
}

export class RemoveLiquidity__Params {
  _event: RemoveLiquidity;

  constructor(event: RemoveLiquidity) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get outputBase(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get outputToken(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get unitsClaimed(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Swapped extends ethereum.Event {
  get params(): Swapped__Params {
    return new Swapped__Params(this);
  }
}

export class Swapped__Params {
  _event: Swapped;

  constructor(event: Swapped) {
    this._event = event;
  }

  get tokenFrom(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenTo(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get inputAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get outputAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get fee(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Pool__burnSynthResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getOutputAmount(): BigInt {
    return this.value0;
  }

  getFee(): BigInt {
    return this.value1;
  }
}

export class Pool__mintSynthResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getOutputAmount(): BigInt {
    return this.value0;
  }

  getFee(): BigInt {
    return this.value1;
  }
}

export class Pool__removeForMemberResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getOutputBase(): BigInt {
    return this.value0;
  }

  getOutputToken(): BigInt {
    return this.value1;
  }
}

export class Pool__swapToResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getOutputAmount(): BigInt {
    return this.value0;
  }

  getFee(): BigInt {
    return this.value1;
  }
}

export class Pool extends ethereum.SmartContract {
  static bind(address: Address): Pool {
    return new Pool("Pool", address);
  }

  BASE(): Address {
    let result = super.call("BASE", "BASE():(address)", []);

    return result[0].toAddress();
  }

  try_BASE(): ethereum.CallResult<Address> {
    let result = super.tryCall("BASE", "BASE():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  SYNTH(): Address {
    let result = super.call("SYNTH", "SYNTH():(address)", []);

    return result[0].toAddress();
  }

  try_SYNTH(): ethereum.CallResult<Address> {
    let result = super.tryCall("SYNTH", "SYNTH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  TOKEN(): Address {
    let result = super.call("TOKEN", "TOKEN():(address)", []);

    return result[0].toAddress();
  }

  try_TOKEN(): ethereum.CallResult<Address> {
    let result = super.tryCall("TOKEN", "TOKEN():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  addForMember(member: Address): BigInt {
    let result = super.call("addForMember", "addForMember(address):(uint256)", [
      ethereum.Value.fromAddress(member)
    ]);

    return result[0].toBigInt();
  }

  try_addForMember(member: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "addForMember",
      "addForMember(address):(uint256)",
      [ethereum.Value.fromAddress(member)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseAmount(): BigInt {
    let result = super.call("baseAmount", "baseAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_baseAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("baseAmount", "baseAmount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseCap(): BigInt {
    let result = super.call("baseCap", "baseCap():(uint256)", []);

    return result[0].toBigInt();
  }

  try_baseCap(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("baseCap", "baseCap():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  burnSynth(recipient: Address, actualMember: Address): Pool__burnSynthResult {
    let result = super.call(
      "burnSynth",
      "burnSynth(address,address):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromAddress(actualMember)
      ]
    );

    return new Pool__burnSynthResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_burnSynth(
    recipient: Address,
    actualMember: Address
  ): ethereum.CallResult<Pool__burnSynthResult> {
    let result = super.tryCall(
      "burnSynth",
      "burnSynth(address,address):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromAddress(actualMember)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__burnSynthResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  freeze(): boolean {
    let result = super.call("freeze", "freeze():(bool)", []);

    return result[0].toBoolean();
  }

  try_freeze(): ethereum.CallResult<boolean> {
    let result = super.tryCall("freeze", "freeze():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  genesis(): BigInt {
    let result = super.call("genesis", "genesis():(uint256)", []);

    return result[0].toBigInt();
  }

  try_genesis(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("genesis", "genesis():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lastStirred(): BigInt {
    let result = super.call("lastStirred", "lastStirred():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastStirred(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lastStirred", "lastStirred():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  map30DPoolRevenue(): BigInt {
    let result = super.call(
      "map30DPoolRevenue",
      "map30DPoolRevenue():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_map30DPoolRevenue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "map30DPoolRevenue",
      "map30DPoolRevenue():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mapPast30DPoolRevenue(): BigInt {
    let result = super.call(
      "mapPast30DPoolRevenue",
      "mapPast30DPoolRevenue():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_mapPast30DPoolRevenue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mapPast30DPoolRevenue",
      "mapPast30DPoolRevenue():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintSynth(member: Address): Pool__mintSynthResult {
    let result = super.call(
      "mintSynth",
      "mintSynth(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(member)]
    );

    return new Pool__mintSynthResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_mintSynth(member: Address): ethereum.CallResult<Pool__mintSynthResult> {
    let result = super.tryCall(
      "mintSynth",
      "mintSynth(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(member)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__mintSynthResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  oldRate(): BigInt {
    let result = super.call("oldRate", "oldRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_oldRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("oldRate", "oldRate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  removeForMember(
    recipient: Address,
    actualMember: Address
  ): Pool__removeForMemberResult {
    let result = super.call(
      "removeForMember",
      "removeForMember(address,address):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromAddress(actualMember)
      ]
    );

    return new Pool__removeForMemberResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_removeForMember(
    recipient: Address,
    actualMember: Address
  ): ethereum.CallResult<Pool__removeForMemberResult> {
    let result = super.tryCall(
      "removeForMember",
      "removeForMember(address,address):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromAddress(actualMember)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__removeForMemberResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  stirCauldron(synth: Address): BigInt {
    let result = super.call("stirCauldron", "stirCauldron(address):(uint256)", [
      ethereum.Value.fromAddress(synth)
    ]);

    return result[0].toBigInt();
  }

  try_stirCauldron(synth: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "stirCauldron",
      "stirCauldron(address):(uint256)",
      [ethereum.Value.fromAddress(synth)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stirRate(): BigInt {
    let result = super.call("stirRate", "stirRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_stirRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("stirRate", "stirRate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stirStamp(): BigInt {
    let result = super.call("stirStamp", "stirStamp():(uint256)", []);

    return result[0].toBigInt();
  }

  try_stirStamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("stirStamp", "stirStamp():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swapTo(token: Address, member: Address): Pool__swapToResult {
    let result = super.call(
      "swapTo",
      "swapTo(address,address):(uint256,uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(member)]
    );

    return new Pool__swapToResult(result[0].toBigInt(), result[1].toBigInt());
  }

  try_swapTo(
    token: Address,
    member: Address
  ): ethereum.CallResult<Pool__swapToResult> {
    let result = super.tryCall(
      "swapTo",
      "swapTo(address,address):(uint256,uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(member)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__swapToResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  synthCap(): BigInt {
    let result = super.call("synthCap", "synthCap():(uint256)", []);

    return result[0].toBigInt();
  }

  try_synthCap(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("synthCap", "synthCap():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenAmount(): BigInt {
    let result = super.call("tokenAmount", "tokenAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokenAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokenAmount", "tokenAmount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _base(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RTCCall extends ethereum.Call {
  get inputs(): RTCCall__Inputs {
    return new RTCCall__Inputs(this);
  }

  get outputs(): RTCCall__Outputs {
    return new RTCCall__Outputs(this);
  }
}

export class RTCCall__Inputs {
  _call: RTCCall;

  constructor(call: RTCCall) {
    this._call = call;
  }

  get _newRTC(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RTCCall__Outputs {
  _call: RTCCall;

  constructor(call: RTCCall) {
    this._call = call;
  }
}

export class AddForMemberCall extends ethereum.Call {
  get inputs(): AddForMemberCall__Inputs {
    return new AddForMemberCall__Inputs(this);
  }

  get outputs(): AddForMemberCall__Outputs {
    return new AddForMemberCall__Outputs(this);
  }
}

export class AddForMemberCall__Inputs {
  _call: AddForMemberCall;

  constructor(call: AddForMemberCall) {
    this._call = call;
  }

  get member(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddForMemberCall__Outputs {
  _call: AddForMemberCall;

  constructor(call: AddForMemberCall) {
    this._call = call;
  }

  get liquidityUnits(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class BurnSynthCall extends ethereum.Call {
  get inputs(): BurnSynthCall__Inputs {
    return new BurnSynthCall__Inputs(this);
  }

  get outputs(): BurnSynthCall__Outputs {
    return new BurnSynthCall__Outputs(this);
  }
}

export class BurnSynthCall__Inputs {
  _call: BurnSynthCall;

  constructor(call: BurnSynthCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get actualMember(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class BurnSynthCall__Outputs {
  _call: BurnSynthCall;

  constructor(call: BurnSynthCall) {
    this._call = call;
  }

  get outputAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get fee(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class MintSynthCall extends ethereum.Call {
  get inputs(): MintSynthCall__Inputs {
    return new MintSynthCall__Inputs(this);
  }

  get outputs(): MintSynthCall__Outputs {
    return new MintSynthCall__Outputs(this);
  }
}

export class MintSynthCall__Inputs {
  _call: MintSynthCall;

  constructor(call: MintSynthCall) {
    this._call = call;
  }

  get member(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class MintSynthCall__Outputs {
  _call: MintSynthCall;

  constructor(call: MintSynthCall) {
    this._call = call;
  }

  get outputAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get fee(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class RemoveForMemberCall extends ethereum.Call {
  get inputs(): RemoveForMemberCall__Inputs {
    return new RemoveForMemberCall__Inputs(this);
  }

  get outputs(): RemoveForMemberCall__Outputs {
    return new RemoveForMemberCall__Outputs(this);
  }
}

export class RemoveForMemberCall__Inputs {
  _call: RemoveForMemberCall;

  constructor(call: RemoveForMemberCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get actualMember(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RemoveForMemberCall__Outputs {
  _call: RemoveForMemberCall;

  constructor(call: RemoveForMemberCall) {
    this._call = call;
  }

  get outputBase(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get outputToken(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class SetFreezePointCall extends ethereum.Call {
  get inputs(): SetFreezePointCall__Inputs {
    return new SetFreezePointCall__Inputs(this);
  }

  get outputs(): SetFreezePointCall__Outputs {
    return new SetFreezePointCall__Outputs(this);
  }
}

export class SetFreezePointCall__Inputs {
  _call: SetFreezePointCall;

  constructor(call: SetFreezePointCall) {
    this._call = call;
  }

  get _newFreezePoint(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFreezePointCall__Outputs {
  _call: SetFreezePointCall;

  constructor(call: SetFreezePointCall) {
    this._call = call;
  }
}

export class SetSynthCapCall extends ethereum.Call {
  get inputs(): SetSynthCapCall__Inputs {
    return new SetSynthCapCall__Inputs(this);
  }

  get outputs(): SetSynthCapCall__Outputs {
    return new SetSynthCapCall__Outputs(this);
  }
}

export class SetSynthCapCall__Inputs {
  _call: SetSynthCapCall;

  constructor(call: SetSynthCapCall) {
    this._call = call;
  }

  get _synthCap(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSynthCapCall__Outputs {
  _call: SetSynthCapCall;

  constructor(call: SetSynthCapCall) {
    this._call = call;
  }
}

export class StirCauldronCall extends ethereum.Call {
  get inputs(): StirCauldronCall__Inputs {
    return new StirCauldronCall__Inputs(this);
  }

  get outputs(): StirCauldronCall__Outputs {
    return new StirCauldronCall__Outputs(this);
  }
}

export class StirCauldronCall__Inputs {
  _call: StirCauldronCall;

  constructor(call: StirCauldronCall) {
    this._call = call;
  }

  get synth(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class StirCauldronCall__Outputs {
  _call: StirCauldronCall;

  constructor(call: StirCauldronCall) {
    this._call = call;
  }

  get steamedSynths(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SwapToCall extends ethereum.Call {
  get inputs(): SwapToCall__Inputs {
    return new SwapToCall__Inputs(this);
  }

  get outputs(): SwapToCall__Outputs {
    return new SwapToCall__Outputs(this);
  }
}

export class SwapToCall__Inputs {
  _call: SwapToCall;

  constructor(call: SwapToCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get member(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SwapToCall__Outputs {
  _call: SwapToCall;

  constructor(call: SwapToCall) {
    this._call = call;
  }

  get outputAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get fee(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class SyncCall extends ethereum.Call {
  get inputs(): SyncCall__Inputs {
    return new SyncCall__Inputs(this);
  }

  get outputs(): SyncCall__Outputs {
    return new SyncCall__Outputs(this);
  }
}

export class SyncCall__Inputs {
  _call: SyncCall;

  constructor(call: SyncCall) {
    this._call = call;
  }
}

export class SyncCall__Outputs {
  _call: SyncCall;

  constructor(call: SyncCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
