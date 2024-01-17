/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export type PositionUnderlyingStruct = {
  positionId: BytesLike;
  sqrtPriceX96: BigNumberish;
  pool: AddressLike;
  tick: BigNumberish;
  lowerTick: BigNumberish;
  upperTick: BigNumberish;
};

export type PositionUnderlyingStructOutput = [
  positionId: string,
  sqrtPriceX96: bigint,
  pool: string,
  tick: bigint,
  lowerTick: bigint,
  upperTick: bigint
] & {
  positionId: string;
  sqrtPriceX96: bigint;
  pool: string;
  tick: bigint;
  lowerTick: bigint;
  upperTick: bigint;
};

export type RangeStruct = {
  lowerTick: BigNumberish;
  upperTick: BigNumberish;
  feeTier: BigNumberish;
};

export type RangeStructOutput = [
  lowerTick: bigint,
  upperTick: bigint,
  feeTier: bigint
] & { lowerTick: bigint; upperTick: bigint; feeTier: bigint };

export type UnderlyingPayloadStruct = {
  ranges: RangeStruct[];
  factory: AddressLike;
  token0: AddressLike;
  token1: AddressLike;
  self: AddressLike;
};

export type UnderlyingPayloadStructOutput = [
  ranges: RangeStructOutput[],
  factory: string,
  token0: string,
  token1: string,
  self: string
] & {
  ranges: RangeStructOutput[];
  factory: string;
  token0: string;
  token1: string;
  self: string;
};

export interface MockFArrakisV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "checkMulDiv"
      | "computeMintAmounts"
      | "getPositionId"
      | "getUnderlyingBalances"
      | "subtractAdminFees"
      | "totalUnderlyingWithFees"
      | "validateTickSpacing"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkMulDiv",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "computeMintAmounts",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionId",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingBalances",
    values: [PositionUnderlyingStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "subtractAdminFees",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalUnderlyingWithFees",
    values: [UnderlyingPayloadStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "validateTickSpacing",
    values: [AddressLike, RangeStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkMulDiv",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeMintAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subtractAdminFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalUnderlyingWithFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateTickSpacing",
    data: BytesLike
  ): Result;
}

export interface MockFArrakisV2 extends BaseContract {
  connect(runner?: ContractRunner | null): MockFArrakisV2;
  waitForDeployment(): Promise<this>;

  interface: MockFArrakisV2Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  checkMulDiv: TypedContractMethod<
    [a: BigNumberish, b: BigNumberish, c: BigNumberish],
    [bigint],
    "view"
  >;

  computeMintAmounts: TypedContractMethod<
    [
      current0_: BigNumberish,
      current1_: BigNumberish,
      totalSupply_: BigNumberish,
      amount0Max_: BigNumberish,
      amount1Max_: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amount0: bigint;
        amount1: bigint;
        mintAmount: bigint;
      }
    ],
    "view"
  >;

  getPositionId: TypedContractMethod<
    [self_: AddressLike, lowerTick_: BigNumberish, upperTick_: BigNumberish],
    [string],
    "view"
  >;

  getUnderlyingBalances: TypedContractMethod<
    [positionUnderlying_: PositionUnderlyingStruct],
    [
      [bigint, bigint, bigint, bigint] & {
        amount0: bigint;
        amount1: bigint;
        fee0: bigint;
        fee1: bigint;
      }
    ],
    "view"
  >;

  subtractAdminFees: TypedContractMethod<
    [
      rawFee0_: BigNumberish,
      rawFee1_: BigNumberish,
      managerFeeBPS_: BigNumberish
    ],
    [[bigint, bigint] & { fee0: bigint; fee1: bigint }],
    "view"
  >;

  totalUnderlyingWithFees: TypedContractMethod<
    [underlyingPayload_: UnderlyingPayloadStruct],
    [
      [bigint, bigint, bigint, bigint] & {
        amount0: bigint;
        amount1: bigint;
        fee0: bigint;
        fee1: bigint;
      }
    ],
    "view"
  >;

  validateTickSpacing: TypedContractMethod<
    [pool_: AddressLike, range_: RangeStruct],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "checkMulDiv"
  ): TypedContractMethod<
    [a: BigNumberish, b: BigNumberish, c: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "computeMintAmounts"
  ): TypedContractMethod<
    [
      current0_: BigNumberish,
      current1_: BigNumberish,
      totalSupply_: BigNumberish,
      amount0Max_: BigNumberish,
      amount1Max_: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amount0: bigint;
        amount1: bigint;
        mintAmount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPositionId"
  ): TypedContractMethod<
    [self_: AddressLike, lowerTick_: BigNumberish, upperTick_: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUnderlyingBalances"
  ): TypedContractMethod<
    [positionUnderlying_: PositionUnderlyingStruct],
    [
      [bigint, bigint, bigint, bigint] & {
        amount0: bigint;
        amount1: bigint;
        fee0: bigint;
        fee1: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "subtractAdminFees"
  ): TypedContractMethod<
    [
      rawFee0_: BigNumberish,
      rawFee1_: BigNumberish,
      managerFeeBPS_: BigNumberish
    ],
    [[bigint, bigint] & { fee0: bigint; fee1: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "totalUnderlyingWithFees"
  ): TypedContractMethod<
    [underlyingPayload_: UnderlyingPayloadStruct],
    [
      [bigint, bigint, bigint, bigint] & {
        amount0: bigint;
        amount1: bigint;
        fee0: bigint;
        fee1: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "validateTickSpacing"
  ): TypedContractMethod<
    [pool_: AddressLike, range_: RangeStruct],
    [boolean],
    "view"
  >;

  filters: {};
}