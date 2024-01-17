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
} from "../../common";

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

export interface PositionInterface extends Interface {
  getFunction(
    nameOrSignature: "getLiquidityByRange" | "getPositionId" | "rangeExists"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getLiquidityByRange",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionId",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rangeExists",
    values: [RangeStruct[], RangeStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "getLiquidityByRange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rangeExists",
    data: BytesLike
  ): Result;
}

export interface Position extends BaseContract {
  connect(runner?: ContractRunner | null): Position;
  waitForDeployment(): Promise<this>;

  interface: PositionInterface;

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

  getLiquidityByRange: TypedContractMethod<
    [
      pool_: AddressLike,
      self_: AddressLike,
      lowerTick_: BigNumberish,
      upperTick_: BigNumberish
    ],
    [bigint],
    "view"
  >;

  getPositionId: TypedContractMethod<
    [self_: AddressLike, lowerTick_: BigNumberish, upperTick_: BigNumberish],
    [string],
    "view"
  >;

  rangeExists: TypedContractMethod<
    [currentRanges_: RangeStruct[], range_: RangeStruct],
    [[boolean, bigint] & { ok: boolean; index: bigint }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getLiquidityByRange"
  ): TypedContractMethod<
    [
      pool_: AddressLike,
      self_: AddressLike,
      lowerTick_: BigNumberish,
      upperTick_: BigNumberish
    ],
    [bigint],
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
    nameOrSignature: "rangeExists"
  ): TypedContractMethod<
    [currentRanges_: RangeStruct[], range_: RangeStruct],
    [[boolean, bigint] & { ok: boolean; index: bigint }],
    "view"
  >;

  filters: {};
}