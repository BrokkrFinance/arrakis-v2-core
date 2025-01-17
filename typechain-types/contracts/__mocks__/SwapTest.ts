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

export interface SwapTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getSwapResult"
      | "swap"
      | "uniswapV3SwapCallback"
      | "washTrade"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getSwapResult",
    values: [AddressLike, boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [AddressLike, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "washTrade",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSwapResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "washTrade", data: BytesLike): Result;
}

export interface SwapTest extends BaseContract {
  connect(runner?: ContractRunner | null): SwapTest;
  waitForDeployment(): Promise<this>;

  interface: SwapTestInterface;

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

  getSwapResult: TypedContractMethod<
    [
      pool: AddressLike,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amount0Delta: bigint;
        amount1Delta: bigint;
        nextSqrtRatio: bigint;
      }
    ],
    "nonpayable"
  >;

  swap: TypedContractMethod<
    [pool: AddressLike, zeroForOne: boolean, amountSpecified: BigNumberish],
    [void],
    "nonpayable"
  >;

  uniswapV3SwapCallback: TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  washTrade: TypedContractMethod<
    [
      pool: AddressLike,
      amountSpecified: BigNumberish,
      numTrades: BigNumberish,
      ratio: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getSwapResult"
  ): TypedContractMethod<
    [
      pool: AddressLike,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amount0Delta: bigint;
        amount1Delta: bigint;
        nextSqrtRatio: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [pool: AddressLike, zeroForOne: boolean, amountSpecified: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "uniswapV3SwapCallback"
  ): TypedContractMethod<
    [amount0Delta: BigNumberish, amount1Delta: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "washTrade"
  ): TypedContractMethod<
    [
      pool: AddressLike,
      amountSpecified: BigNumberish,
      numTrades: BigNumberish,
      ratio: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}
