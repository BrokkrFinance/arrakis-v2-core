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
  TypedContractMethod,
} from "../../common";

export type InitializePayloadStruct = {
  feeTiers: BigNumberish[];
  token0: AddressLike;
  token1: AddressLike;
  owner: AddressLike;
  init0: BigNumberish;
  init1: BigNumberish;
  manager: AddressLike;
  routers: AddressLike[];
  factory: AddressLike;
};

export type InitializePayloadStructOutput = [
  feeTiers: bigint[],
  token0: string,
  token1: string,
  owner: string,
  init0: bigint,
  init1: bigint,
  manager: string,
  routers: string[],
  factory: string
] & {
  feeTiers: bigint[];
  token0: string;
  token1: string;
  owner: string;
  init0: bigint;
  init1: bigint;
  manager: string;
  routers: string[];
  factory: string;
};

export interface ArrakisV2FactoryStorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "arrakisV2Beacon"
      | "deployVault"
      | "getProxyAdmin"
      | "getProxyImplementation"
      | "getTokenName"
      | "initialize"
      | "makeVaultsImmutable"
      | "numVaults"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
      | "upgradeVaults"
      | "upgradeVaultsAndCall"
      | "vaults"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "InitFactory"
      | "Initialized"
      | "OwnershipTransferred"
      | "VaultCreated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "arrakisV2Beacon",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployVault",
    values: [InitializePayloadStruct, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProxyImplementation",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenName",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "makeVaultsImmutable",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(functionFragment: "numVaults", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeVaults",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeVaultsAndCall",
    values: [AddressLike[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "vaults",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "arrakisV2Beacon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProxyImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "makeVaultsImmutable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numVaults", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeVaultsAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;
}

export namespace InitFactoryEvent {
  export type InputTuple = [owner: AddressLike];
  export type OutputTuple = [owner: string];
  export interface OutputObject {
    owner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VaultCreatedEvent {
  export type InputTuple = [manager: AddressLike, vault: AddressLike];
  export type OutputTuple = [manager: string, vault: string];
  export interface OutputObject {
    manager: string;
    vault: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ArrakisV2FactoryStorage extends BaseContract {
  connect(runner?: ContractRunner | null): ArrakisV2FactoryStorage;
  waitForDeployment(): Promise<this>;

  interface: ArrakisV2FactoryStorageInterface;

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

  arrakisV2Beacon: TypedContractMethod<[], [string], "view">;

  deployVault: TypedContractMethod<
    [params_: InitializePayloadStruct, isBeacon_: boolean],
    [string],
    "nonpayable"
  >;

  getProxyAdmin: TypedContractMethod<[proxy: AddressLike], [string], "view">;

  getProxyImplementation: TypedContractMethod<
    [proxy: AddressLike],
    [string],
    "view"
  >;

  getTokenName: TypedContractMethod<
    [token0_: AddressLike, token1_: AddressLike],
    [string],
    "view"
  >;

  initialize: TypedContractMethod<[_owner_: AddressLike], [void], "nonpayable">;

  makeVaultsImmutable: TypedContractMethod<
    [vaults_: AddressLike[]],
    [void],
    "nonpayable"
  >;

  numVaults: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeVaults: TypedContractMethod<
    [vaults_: AddressLike[]],
    [void],
    "nonpayable"
  >;

  upgradeVaultsAndCall: TypedContractMethod<
    [vaults_: AddressLike[], datas_: BytesLike[]],
    [void],
    "nonpayable"
  >;

  vaults: TypedContractMethod<
    [startIndex_: BigNumberish, endIndex_: BigNumberish],
    [string[]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "arrakisV2Beacon"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deployVault"
  ): TypedContractMethod<
    [params_: InitializePayloadStruct, isBeacon_: boolean],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getProxyAdmin"
  ): TypedContractMethod<[proxy: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getProxyImplementation"
  ): TypedContractMethod<[proxy: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getTokenName"
  ): TypedContractMethod<
    [token0_: AddressLike, token1_: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_owner_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "makeVaultsImmutable"
  ): TypedContractMethod<[vaults_: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "numVaults"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeVaults"
  ): TypedContractMethod<[vaults_: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeVaultsAndCall"
  ): TypedContractMethod<
    [vaults_: AddressLike[], datas_: BytesLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vaults"
  ): TypedContractMethod<
    [startIndex_: BigNumberish, endIndex_: BigNumberish],
    [string[]],
    "view"
  >;

  getEvent(
    key: "InitFactory"
  ): TypedContractEvent<
    InitFactoryEvent.InputTuple,
    InitFactoryEvent.OutputTuple,
    InitFactoryEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "VaultCreated"
  ): TypedContractEvent<
    VaultCreatedEvent.InputTuple,
    VaultCreatedEvent.OutputTuple,
    VaultCreatedEvent.OutputObject
  >;

  filters: {
    "InitFactory(address)": TypedContractEvent<
      InitFactoryEvent.InputTuple,
      InitFactoryEvent.OutputTuple,
      InitFactoryEvent.OutputObject
    >;
    InitFactory: TypedContractEvent<
      InitFactoryEvent.InputTuple,
      InitFactoryEvent.OutputTuple,
      InitFactoryEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "VaultCreated(address,address)": TypedContractEvent<
      VaultCreatedEvent.InputTuple,
      VaultCreatedEvent.OutputTuple,
      VaultCreatedEvent.OutputObject
    >;
    VaultCreated: TypedContractEvent<
      VaultCreatedEvent.InputTuple,
      VaultCreatedEvent.OutputTuple,
      VaultCreatedEvent.OutputObject
    >;
  };
}
