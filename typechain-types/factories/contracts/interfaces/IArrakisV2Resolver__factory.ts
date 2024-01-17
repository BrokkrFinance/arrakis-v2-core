/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IArrakisV2Resolver,
  IArrakisV2ResolverInterface,
} from "../../../contracts/interfaces/IArrakisV2Resolver";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceX96_",
        type: "uint160",
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
      {
        internalType: "int128",
        name: "liquidity_",
        type: "int128",
      },
    ],
    name: "getAmountsForLiquidity",
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
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IArrakisV2",
        name: "vaultV2_",
        type: "address",
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
    name: "getMintAmounts",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr_",
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
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
        ],
        internalType: "struct RangeWeight[]",
        name: "rangeWeights_",
        type: "tuple[]",
      },
      {
        internalType: "contract IArrakisV2",
        name: "vaultV2_",
        type: "address",
      },
    ],
    name: "standardRebalance",
    outputs: [
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
        name: "rebalanceParams",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IArrakisV2Resolver__factory {
  static readonly abi = _abi;
  static createInterface(): IArrakisV2ResolverInterface {
    return new Interface(_abi) as IArrakisV2ResolverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IArrakisV2Resolver {
    return new Contract(address, _abi, runner) as unknown as IArrakisV2Resolver;
  }
}
