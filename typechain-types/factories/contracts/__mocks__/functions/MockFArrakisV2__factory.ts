/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  MockFArrakisV2,
  MockFArrakisV2Interface,
} from "../../../../contracts/__mocks__/functions/MockFArrakisV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "c",
        type: "uint256",
      },
    ],
    name: "checkMulDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "current0_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "current1_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount0Max_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Max_",
        type: "uint256",
      },
    ],
    name: "computeMintAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "self_",
        type: "address",
      },
      {
        internalType: "int24",
        name: "lowerTick_",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "upperTick_",
        type: "int24",
      },
    ],
    name: "getPositionId",
    outputs: [
      {
        internalType: "bytes32",
        name: "positionId",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "positionId",
            type: "bytes32",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceX96",
            type: "uint160",
          },
          {
            internalType: "contract IUniswapV3Pool",
            name: "pool",
            type: "address",
          },
          {
            internalType: "int24",
            name: "tick",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "lowerTick",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "upperTick",
            type: "int24",
          },
        ],
        internalType: "struct PositionUnderlying",
        name: "positionUnderlying_",
        type: "tuple",
      },
    ],
    name: "getUnderlyingBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rawFee0_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rawFee1_",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "managerFeeBPS_",
        type: "uint16",
      },
    ],
    name: "subtractAdminFees",
    outputs: [
      {
        internalType: "uint256",
        name: "fee0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee1",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "int24",
                name: "lowerTick",
                type: "int24",
              },
              {
                internalType: "int24",
                name: "upperTick",
                type: "int24",
              },
              {
                internalType: "uint24",
                name: "feeTier",
                type: "uint24",
              },
            ],
            internalType: "struct Range[]",
            name: "ranges",
            type: "tuple[]",
          },
          {
            internalType: "contract IUniswapV3Factory",
            name: "factory",
            type: "address",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "address",
            name: "self",
            type: "address",
          },
        ],
        internalType: "struct UnderlyingPayload",
        name: "underlyingPayload_",
        type: "tuple",
      },
    ],
    name: "totalUnderlyingWithFees",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "int24",
            name: "lowerTick",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "upperTick",
            type: "int24",
          },
          {
            internalType: "uint24",
            name: "feeTier",
            type: "uint24",
          },
        ],
        internalType: "struct Range",
        name: "range_",
        type: "tuple",
      },
    ],
    name: "validateTickSpacing",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ad5806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806348c619c71161005b57806348c619c7146100fe578063b08602b814610126578063bf08c39114610139578063c30fc38d1461014c57600080fd5b80630b9c571c146100825780631208efca146100ba578063188312ee146100db575b600080fd5b6100956100903660046105dc565b61017a565b6040805194855260208501939093529183015260608201526080015b60405180910390f35b6100cd6100c8366004610651565b610207565b6040519081526020016100b1565b6100ee6100e93660046106a9565b6102a2565b60405190151581526020016100b1565b61011161010c36600461074c565b610348565b604080519283526020830191909152016100b1565b61009561013436600461078c565b6103dd565b6100cd6101473660046107a4565b61041a565b61015f61015a3660046107d0565b610427565b604080519384526020840192909252908201526060016100b1565b60008060008073__$3d23d8578387a47facd93bb77f6fe6e81b$__63e56f4d91866040518263ffffffff1660e01b81526004016101b79190610879565b608060405180830381865af41580156101d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f89190610950565b93509350935093509193509193565b60405163090477e560e11b81526001600160a01b0384166004820152600283810b602483015282900b604482015260009073__$b131e44167300e1b6d47510635310686a7$__90631208efca90606401602060405180830381865af4158015610274573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102989190610986565b90505b9392505050565b604080516303580c4160e51b81526001600160a01b03841660048201528251600290810b60248301526020840151900b60448201529082015162ffffff16606482015260009073__$57c880716d25c772e0b1e547659075b66d$__90636b01882090608401602060405180830381865af4158015610324573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029b919061099f565b6040516348c619c760e01b8152600481018490526024810183905261ffff82166044820152600090819073__$3d23d8578387a47facd93bb77f6fe6e81b$__906348c619c7906064016040805180830381865af41580156103ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d191906109c1565b91509150935093915050565b60008060008073__$3d23d8578387a47facd93bb77f6fe6e81b$__633ba56978866040518263ffffffff1660e01b81526004016101b791906109e5565b60006102988484846104e5565b60405163c30fc38d60e01b815260048101869052602481018590526044810184905260648101839052608481018290526000908190819073__$3d23d8578387a47facd93bb77f6fe6e81b$__9063c30fc38d9060a401602060405180830381865af415801561049a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104be9190610986565b90506104cb818988610593565b92506104d8818888610593565b9150955095509592505050565b600080806000198587098587029250828110838203039150508060000361051e576000841161051357600080fd5b50829004905061029b565b80841161052a57600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b60006105a08484846104e5565b9050600082806105b2576105b2610a62565b848609111561029b5760001981106105c957600080fd5b806105d381610a78565b95945050505050565b6000602082840312156105ee57600080fd5b813567ffffffffffffffff81111561060557600080fd5b820160a0818503121561029b57600080fd5b6001600160a01b038116811461062c57600080fd5b50565b803561063a81610617565b919050565b8035600281900b811461063a57600080fd5b60008060006060848603121561066657600080fd5b833561067181610617565b925061067f6020850161063f565b915061068d6040850161063f565b90509250925092565b803562ffffff8116811461063a57600080fd5b60008082840360808112156106bd57600080fd5b83356106c881610617565b92506060601f19820112156106dc57600080fd5b506040516060810181811067ffffffffffffffff8211171561070e57634e487b7160e01b600052604160045260246000fd5b60405261071d6020850161063f565b815261072b6040850161063f565b602082015261073c60608501610696565b6040820152809150509250929050565b60008060006060848603121561076157600080fd5b8335925060208401359150604084013561ffff8116811461078157600080fd5b809150509250925092565b600060c0828403121561079e57600080fd5b50919050565b6000806000606084860312156107b957600080fd5b505081359360208301359350604090920135919050565b600080600080600060a086880312156107e857600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b8183526000602080850194508260005b8581101561086e5761082c8261063f565b600281810b895261083e85850161063f565b900b8885015250604062ffffff610856848301610696565b1690880152606096870196919091019060010161081b565b509495945050505050565b6020815260008235601e1984360301811261089357600080fd5b8301803567ffffffffffffffff8111156108ac57600080fd5b6060810236038513156108be57600080fd5b60a060208501526108d660c08501826020850161080b565b9150506108e56020850161062f565b6001600160a01b0381166040850152506109016040850161062f565b6001600160a01b03811660608501525061091d6060850161062f565b6001600160a01b0381166080850152506109396080850161062f565b6001600160a01b03811660a0850152509392505050565b6000806000806080858703121561096657600080fd5b505082516020840151604085015160609095015191969095509092509050565b60006020828403121561099857600080fd5b5051919050565b6000602082840312156109b157600080fd5b8151801515811461029b57600080fd5b600080604083850312156109d457600080fd5b505080516020909101519092909150565b8135815260c0810160208301356109fb81610617565b6001600160a01b039081166020840152604084013590610a1a82610617565b166040830152610a2c6060840161063f565b60020b6060830152610a406080840161063f565b60020b6080830152610a5460a0840161063f565b60020b60a083015292915050565b634e487b7160e01b600052601260045260246000fd5b600060018201610a9857634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e6b2991514cc622ab3ed32be68e18caa9b88a7df0b52de0a21f825ae0108894764736f6c634300080d0033";

type MockFArrakisV2ConstructorParams =
  | [linkLibraryAddresses: MockFArrakisV2LibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockFArrakisV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class MockFArrakisV2__factory extends ContractFactory {
  constructor(...args: MockFArrakisV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        MockFArrakisV2__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: MockFArrakisV2LibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$3d23d8578387a47facd93bb77f6fe6e81b\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/Underlying.sol:Underlying"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b131e44167300e1b6d47510635310686a7\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/Position.sol:Position"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$57c880716d25c772e0b1e547659075b66d\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/Pool.sol:Pool"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockFArrakisV2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockFArrakisV2__factory {
    return super.connect(runner) as MockFArrakisV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFArrakisV2Interface {
    return new Interface(_abi) as MockFArrakisV2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockFArrakisV2 {
    return new Contract(address, _abi, runner) as unknown as MockFArrakisV2;
  }
}

export interface MockFArrakisV2LibraryAddresses {
  ["contracts/libraries/Underlying.sol:Underlying"]: string;
  ["contracts/libraries/Position.sol:Position"]: string;
  ["contracts/libraries/Pool.sol:Pool"]: string;
}
