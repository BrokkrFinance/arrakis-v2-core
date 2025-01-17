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
import type { NonPayableOverrides } from "../../../common";
import type {
  ManagerProxyMock,
  ManagerProxyMockInterface,
} from "../../../contracts/__mocks__/ManagerProxyMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vault",
        type: "address",
      },
    ],
    name: "fundVaultBalance",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "managerFeeBPS",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vaultV2",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint128",
                name: "liquidity",
                type: "uint128",
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
                name: "range",
                type: "tuple",
              },
            ],
            internalType: "struct PositionLiquidity[]",
            name: "burns",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "liquidity",
                type: "uint128",
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
                name: "range",
                type: "tuple",
              },
            ],
            internalType: "struct PositionLiquidity[]",
            name: "mints",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "bytes",
                name: "payload",
                type: "bytes",
              },
              {
                internalType: "address",
                name: "router",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "expectedMinReturn",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "zeroForOne",
                type: "bool",
              },
            ],
            internalType: "struct SwapPayload",
            name: "swap",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "minBurn0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minBurn1",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minDeposit0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minDeposit1",
            type: "uint256",
          },
        ],
        internalType: "struct Rebalance",
        name: "rebalanceParams_",
        type: "tuple",
      },
    ],
    name: "rebalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vault_",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "fees_",
        type: "uint16",
      },
    ],
    name: "setManagerFeeBPS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506104e4806100206000396000f3fe60806040526004361061003f5760003560e01c80630ce7b4a9146100445780630cff559414610066578063ccdf7a0214610077578063d7226db7146100a3575b600080fd5b34801561005057600080fd5b5061006461005f366004610171565b6100c3565b005b6100646100743660046101c6565b50565b34801561008357600080fd5b5061008c606481565b60405161ffff909116815260200160405180910390f35b3480156100af57600080fd5b506100646100be3660046101e8565b610125565b604051638712e49760e01b81526001600160a01b03831690638712e497906100ef9084906004016103fa565b600060405180830381600087803b15801561010957600080fd5b505af115801561011d573d6000803e3d6000fd5b505050505050565b6040516323ca642560e11b815261ffff821660048201526001600160a01b03831690634794c84a906024016100ef565b80356001600160a01b038116811461016c57600080fd5b919050565b6000806040838503121561018457600080fd5b61018d83610155565b9150602083013567ffffffffffffffff8111156101a957600080fd5b830160e081860312156101bb57600080fd5b809150509250929050565b6000602082840312156101d857600080fd5b6101e182610155565b9392505050565b600080604083850312156101fb57600080fd5b61020483610155565b9150602083013561ffff811681146101bb57600080fd5b6000808335601e1984360301811261023257600080fd5b830160208101925035905067ffffffffffffffff81111561025257600080fd5b8060071b360383131561026457600080fd5b9250929050565b8035600281900b811461016c57600080fd5b8183526000602080850194508260005b858110156103145781356fffffffffffffffffffffffffffffffff81168082146102b657600080fd5b8852506102c482840161026b565b600290810b888501526040906102db84830161026b565b900b9088015260608281013562ffffff81168082146102f957600080fd5b9189019190915250608096870196919091019060010161028d565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8035801515811461016c57600080fd5b60008135601e1983360301811261036e57600080fd5b8201803567ffffffffffffffff81111561038757600080fd5b80360384131561039657600080fd5b60a085526103ab60a08601826020850161031f565b9150506103ba60208401610155565b6001600160a01b03811660208601525060408301356040850152606083013560608501526103ea60808401610348565b8015156080860152509392505050565b60208152600061040a838461021b565b60e060208501526104206101008501828461027d565b915050610430602085018561021b565b601f198086850301604087015261044884838561027d565b935060408701359250609e1987360301831261046357600080fd5b8584030160608601525061047982828701610358565b91505060608401356080840152608084013560a084015260a084013560c084015260c084013560e0840152809150509291505056fea264697066735822122026efea446a3c5a0e910b0452dbb9164eff3dc3da394b481e374cb037a22912d264736f6c634300080d0033";

type ManagerProxyMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ManagerProxyMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ManagerProxyMock__factory extends ContractFactory {
  constructor(...args: ManagerProxyMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ManagerProxyMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ManagerProxyMock__factory {
    return super.connect(runner) as ManagerProxyMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ManagerProxyMockInterface {
    return new Interface(_abi) as ManagerProxyMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ManagerProxyMock {
    return new Contract(address, _abi, runner) as unknown as ManagerProxyMock;
  }
}
