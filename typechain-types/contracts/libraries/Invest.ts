/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
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

export type PositionLiquidityStruct = {
  liquidity: BigNumberish;
  range: RangeStruct;
};

export type PositionLiquidityStructOutput = [
  liquidity: bigint,
  range: RangeStructOutput
] & { liquidity: bigint; range: RangeStructOutput };

export type SwapPayloadStruct = {
  payload: BytesLike;
  router: AddressLike;
  amountIn: BigNumberish;
  expectedMinReturn: BigNumberish;
  zeroForOne: boolean;
};

export type SwapPayloadStructOutput = [
  payload: string,
  router: string,
  amountIn: bigint,
  expectedMinReturn: bigint,
  zeroForOne: boolean
] & {
  payload: string;
  router: string;
  amountIn: bigint;
  expectedMinReturn: bigint;
  zeroForOne: boolean;
};

export type RebalanceStruct = {
  burns: PositionLiquidityStruct[];
  mints: PositionLiquidityStruct[];
  swap: SwapPayloadStruct;
  minBurn0: BigNumberish;
  minBurn1: BigNumberish;
  minDeposit0: BigNumberish;
  minDeposit1: BigNumberish;
};

export type RebalanceStructOutput = [
  burns: PositionLiquidityStructOutput[],
  mints: PositionLiquidityStructOutput[],
  swap: SwapPayloadStructOutput,
  minBurn0: bigint,
  minBurn1: bigint,
  minDeposit0: bigint,
  minDeposit1: bigint
] & {
  burns: PositionLiquidityStructOutput[];
  mints: PositionLiquidityStructOutput[];
  swap: SwapPayloadStructOutput;
  minBurn0: bigint;
  minBurn1: bigint;
  minDeposit0: bigint;
  minDeposit1: bigint;
};

export interface InvestInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "LPBurned"
      | "LogBurn"
      | "LogCollectedFees"
      | "LogMint"
      | "LogRebalance"
  ): EventFragment;
}

export namespace LPBurnedEvent {
  export type InputTuple = [
    user: AddressLike,
    burnAmount0: BigNumberish,
    burnAmount1: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    burnAmount0: bigint,
    burnAmount1: bigint
  ];
  export interface OutputObject {
    user: string;
    burnAmount0: bigint;
    burnAmount1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogBurnEvent {
  export type InputTuple = [
    receiver: AddressLike,
    burnAmount: BigNumberish,
    amount0Out: BigNumberish,
    amount1Out: BigNumberish
  ];
  export type OutputTuple = [
    receiver: string,
    burnAmount: bigint,
    amount0Out: bigint,
    amount1Out: bigint
  ];
  export interface OutputObject {
    receiver: string;
    burnAmount: bigint;
    amount0Out: bigint;
    amount1Out: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogCollectedFeesEvent {
  export type InputTuple = [fee0: BigNumberish, fee1: BigNumberish];
  export type OutputTuple = [fee0: bigint, fee1: bigint];
  export interface OutputObject {
    fee0: bigint;
    fee1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogMintEvent {
  export type InputTuple = [
    receiver: AddressLike,
    mintAmount: BigNumberish,
    amount0In: BigNumberish,
    amount1In: BigNumberish
  ];
  export type OutputTuple = [
    receiver: string,
    mintAmount: bigint,
    amount0In: bigint,
    amount1In: bigint
  ];
  export interface OutputObject {
    receiver: string;
    mintAmount: bigint;
    amount0In: bigint;
    amount1In: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogRebalanceEvent {
  export type InputTuple = [
    rebalanceParams: RebalanceStruct,
    swapDelta0: BigNumberish,
    swapDelta1: BigNumberish
  ];
  export type OutputTuple = [
    rebalanceParams: RebalanceStructOutput,
    swapDelta0: bigint,
    swapDelta1: bigint
  ];
  export interface OutputObject {
    rebalanceParams: RebalanceStructOutput;
    swapDelta0: bigint;
    swapDelta1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Invest extends BaseContract {
  connect(runner?: ContractRunner | null): Invest;
  waitForDeployment(): Promise<this>;

  interface: InvestInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "LPBurned"
  ): TypedContractEvent<
    LPBurnedEvent.InputTuple,
    LPBurnedEvent.OutputTuple,
    LPBurnedEvent.OutputObject
  >;
  getEvent(
    key: "LogBurn"
  ): TypedContractEvent<
    LogBurnEvent.InputTuple,
    LogBurnEvent.OutputTuple,
    LogBurnEvent.OutputObject
  >;
  getEvent(
    key: "LogCollectedFees"
  ): TypedContractEvent<
    LogCollectedFeesEvent.InputTuple,
    LogCollectedFeesEvent.OutputTuple,
    LogCollectedFeesEvent.OutputObject
  >;
  getEvent(
    key: "LogMint"
  ): TypedContractEvent<
    LogMintEvent.InputTuple,
    LogMintEvent.OutputTuple,
    LogMintEvent.OutputObject
  >;
  getEvent(
    key: "LogRebalance"
  ): TypedContractEvent<
    LogRebalanceEvent.InputTuple,
    LogRebalanceEvent.OutputTuple,
    LogRebalanceEvent.OutputObject
  >;

  filters: {
    "LPBurned(address,uint256,uint256)": TypedContractEvent<
      LPBurnedEvent.InputTuple,
      LPBurnedEvent.OutputTuple,
      LPBurnedEvent.OutputObject
    >;
    LPBurned: TypedContractEvent<
      LPBurnedEvent.InputTuple,
      LPBurnedEvent.OutputTuple,
      LPBurnedEvent.OutputObject
    >;

    "LogBurn(address,uint256,uint256,uint256)": TypedContractEvent<
      LogBurnEvent.InputTuple,
      LogBurnEvent.OutputTuple,
      LogBurnEvent.OutputObject
    >;
    LogBurn: TypedContractEvent<
      LogBurnEvent.InputTuple,
      LogBurnEvent.OutputTuple,
      LogBurnEvent.OutputObject
    >;

    "LogCollectedFees(uint256,uint256)": TypedContractEvent<
      LogCollectedFeesEvent.InputTuple,
      LogCollectedFeesEvent.OutputTuple,
      LogCollectedFeesEvent.OutputObject
    >;
    LogCollectedFees: TypedContractEvent<
      LogCollectedFeesEvent.InputTuple,
      LogCollectedFeesEvent.OutputTuple,
      LogCollectedFeesEvent.OutputObject
    >;

    "LogMint(address,uint256,uint256,uint256)": TypedContractEvent<
      LogMintEvent.InputTuple,
      LogMintEvent.OutputTuple,
      LogMintEvent.OutputObject
    >;
    LogMint: TypedContractEvent<
      LogMintEvent.InputTuple,
      LogMintEvent.OutputTuple,
      LogMintEvent.OutputObject
    >;

    "LogRebalance(tuple,uint256,uint256)": TypedContractEvent<
      LogRebalanceEvent.InputTuple,
      LogRebalanceEvent.OutputTuple,
      LogRebalanceEvent.OutputObject
    >;
    LogRebalance: TypedContractEvent<
      LogRebalanceEvent.InputTuple,
      LogRebalanceEvent.OutputTuple,
      LogRebalanceEvent.OutputObject
    >;
  };
}
