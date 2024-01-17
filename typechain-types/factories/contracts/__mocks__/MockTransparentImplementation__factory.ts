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
  MockTransparentImplementation,
  MockTransparentImplementationInterface,
} from "../../../contracts/__mocks__/MockTransparentImplementation";

const _abi = [
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060fb8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806306fdde0314602d575b600080fd5b604080518082018252600d81527f4d6f636b20636f6e74726163740000000000000000000000000000000000000060208201529051606a91906073565b60405180910390f35b600060208083528351808285015260005b81811015609e578581018301518582016040015282016084565b8181111560af576000604083870101525b50601f01601f191692909201604001939250505056fea264697066735822122045cc1ede74b0c2735f3a96606dc9c9de07caa9bf0888221305d7a69b35e0603064736f6c634300080d0033";

type MockTransparentImplementationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockTransparentImplementationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockTransparentImplementation__factory extends ContractFactory {
  constructor(...args: MockTransparentImplementationConstructorParams) {
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
      MockTransparentImplementation & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MockTransparentImplementation__factory {
    return super.connect(runner) as MockTransparentImplementation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTransparentImplementationInterface {
    return new Interface(_abi) as MockTransparentImplementationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockTransparentImplementation {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MockTransparentImplementation;
  }
}
