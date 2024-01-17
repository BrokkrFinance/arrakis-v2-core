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
  Underlying,
  UnderlyingInterface,
} from "../../../contracts/libraries/Underlying";

const _abi = [
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
        internalType: "uint160",
        name: "sqrtRatioX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioAX96",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtRatioBX96",
        type: "uint160",
      },
      {
        internalType: "int128",
        name: "liquidity",
        type: "int128",
      },
    ],
    name: "getAmountsForDelta",
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
            type: "IUniswapV3Pool",
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
        name: "amount0Current",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Current",
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
            type: "IUniswapV3Pool",
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
      {
        internalType: "uint256",
        name: "mintAmount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
    ],
    name: "getUnderlyingBalancesMint",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0Current",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Current",
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
            type: "IUniswapV3Factory",
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
      {
        internalType: "uint160",
        name: "sqrtPriceX96_",
        type: "uint160",
      },
    ],
    name: "totalUnderlyingAtPriceWithFees",
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
            type: "IUniswapV3Factory",
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
      {
        internalType: "uint256",
        name: "mintAmount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
    ],
    name: "totalUnderlyingForMint",
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
    stateMutability: "view",
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
            type: "IUniswapV3Factory",
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
        components: [
          {
            internalType: "address",
            name: "self",
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
            name: "range",
            type: "tuple",
          },
          {
            internalType: "contract IUniswapV3Pool",
            name: "pool",
            type: "IUniswapV3Pool",
          },
        ],
        internalType: "struct RangeData",
        name: "underlying_",
        type: "tuple",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96_",
        type: "uint160",
      },
    ],
    name: "underlying",
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
        components: [
          {
            internalType: "address",
            name: "self",
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
            name: "range",
            type: "tuple",
          },
          {
            internalType: "contract IUniswapV3Pool",
            name: "pool",
            type: "IUniswapV3Pool",
          },
        ],
        internalType: "struct RangeData",
        name: "underlying_",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "mintAmount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
    ],
    name: "underlyingMint",
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
] as const;

const _bytecode =
  "0x6128ce61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100c85760003560e01c8063bab6c56911610080578063c30fc38d11610065578063c30fc38d1461018c578063e56f4d91146101ad578063f05adb5e146101c057600080fd5b8063bab6c56914610166578063bc4212001461017957600080fd5b806348c619c7116100b157806348c619c7146101185780637c75bd781461014057806383d7ba9f1461015357600080fd5b80631f0f6656146100cd5780633ba5697814610105575b600080fd5b6100e06100db366004612104565b6101d3565b6040805194855260208501939093529183015260608201526080015b60405180910390f35b6100e0610113366004612139565b61035d565b61012b610126366004612165565b6104bd565b604080519283526020830191909152016100fc565b6100e061014e36600461224f565b610516565b61012b610161366004612385565b6106c6565b6100e06101743660046123d3565b610ad8565b6100e0610187366004612407565b610c84565b61019f61019a36600461244e565b610ca4565b6040519081526020016100fc565b6100e06101bb366004612489565b610de6565b61012b6101ce3660046124cd565b610e06565b60008060008060008060008060008b604001516001600160a01b031663514ea4bf8d600001516040518263ffffffff1660e01b815260040161021791815260200190565b60a060405180830381865afa158015610234573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102589190612540565b80955081965082975083985084995050505050506102d26040518060e001604052808681526020018581526020018e604001516001600160a01b03168152602001876001600160801b031681526020018e6060015160020b81526020018e6080015160020b81526020018e60a0015160020b815250610eb4565b90975095506102ea6001600160801b038316886125ad565b96506102ff6001600160801b038216876125ad565b95505050505061034b886020015161031a8a6080015161114f565b6103278b60a0015161114f565b6101ce610346610341876001600160801b03168e8e61156f565b611623565b6116bf565b80955081965050505093509350935093565b600080600080600080600080600089604001516001600160a01b031663514ea4bf8b600001516040518263ffffffff1660e01b81526004016103a191815260200190565b60a060405180830381865afa1580156103be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e29190612540565b945094509450945094506104526040518060e001604052808681526020018581526020018c604001516001600160a01b03168152602001876001600160801b031681526020018c6060015160020b81526020018c6080015160020b81526020018c60a0015160020b815250610eb4565b80975081985050506104828a6020015161046f8c6080015161114f565b61047c8d60a0015161114f565b88611764565b909950975061049a6001600160801b038316886125ad565b96506104af6001600160801b038216876125ad565b955050505050509193509193565b6000806127106104d161ffff8516876125c5565b6104db91906125fa565b6104e5908661260e565b91506127106104f861ffff8516866125c5565b61050291906125fa565b61050c908561260e565b9050935093915050565b60008060008060008087604001516001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015610561573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105859190612635565b50508c516020808f0151805191015160405163090477e560e11b81526001600160a01b039093166004840152600291820b6024840152900b604482015294965092945060009373__$b131e44167300e1b6d47510635310686a7$__9350631208efca92506064019050602060405180830381865af415801561060b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062f91906126d2565b905060006040518060c0016040528083815260200160008b6001600160a01b03161161065b578561065d565b8a5b6001600160a01b031681526020018b604001516001600160a01b031681526020018460020b81526020018b602001516000015160020b81526020018b602001516020015160020b81525090506106b28161035d565b929d919c509a509098509650505050505050565b60008060008060005b87515181101561086357600088602001516001600160a01b0316631698ee828a604001518b606001518c60000151868151811061070e5761070e6126eb565b602090810291909101015160409081015190517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b03938416600482015292909116602483015262ffffff166044820152606401602060405180830381865afa15801561078d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b19190612701565b905060008060008061081160405180606001604052808f608001516001600160a01b031681526020018f6000015189815181106107f0576107f06126eb565b60200260200101518152602001876001600160a01b03168152508d8d610ad8565b9350935093509350838a61082591906125ad565b9950610831838a6125ad565b985061083d82896125ad565b975061084981886125ad565b96505050505050808061085b9061271e565b9150506106cf565b506000876080015190506000806108d78585856001600160a01b031663ccdf7a026040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101269190612737565b915091506109cf89846001600160a01b031663065756db6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561091d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094191906126d2565b6040808e015160808f015191516370a0823160e01b81526001600160a01b0392831660048201529116906370a0823190602401602060405180830381865afa158015610991573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b591906126d2565b6109bf90866125ad565b6109c9919061260e565b8a6117e6565b6109d990886125ad565b9650610abf89846001600160a01b03166342fb9d446040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4191906126d2565b60608d015160808e01516040516370a0823160e01b81526001600160a01b0391821660048201529116906370a0823190602401602060405180830381865afa158015610a91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab591906126d2565b6109bf90856125ad565b610ac990876125ad565b95505050505050935093915050565b60008060008060008088604001516001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e060405180830381865afa158015610b23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b479190612635565b505050505091509150600073__$b131e44167300e1b6d47510635310686a7$__631208efca8b600001518c60200151600001518d60200151602001516040518463ffffffff1660e01b8152600401610bc1939291906001600160a01b03939093168352600291820b6020840152900b604082015260600190565b602060405180830381865af4158015610bde573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0291906126d2565b905060006040518060c00160405280838152602001856001600160a01b031681526020018c604001516001600160a01b031681526020018460020b81526020018c602001516000015160020b81526020018c602001516020015160020b8152509050610c6f818b8b6101d3565b929e919d509b50909950975050505050505050565b600080600080610c948686611826565b9299919850965090945092505050565b600085158015610cb45750600085115b15610ccb57610cc482858761156f565b9050610ddd565b84158015610cd95750600086115b15610ce957610cc483858861156f565b600086118015610cf95750600085115b15610d95576000610d0b84868961156f565b90506000610d1a84878961156f565b9050600082118015610d2c5750600081115b610d7d5760405162461bcd60e51b815260206004820152601660248201527f417272616b69735661756c7456323a206d696e7420300000000000000000000060448201526064015b60405180910390fd5b808210610d8a5780610d8c565b815b92505050610ddd565b60405162461bcd60e51b815260206004820152601560248201527f417272616b69735661756c7456323a2070616e696300000000000000000000006044820152606401610d74565b95945050505050565b600080600080610df7856000611826565b93509350935093509193509193565b600080836001600160a01b0316856001600160a01b03161115610e27579293925b846001600160a01b0316866001600160a01b03161015610e5b57610e54610e4f868686611c0e565b611c55565b9150610eab565b836001600160a01b0316866001600160a01b03161015610e9a57610e83610e4f878686611c0e565b9150610e93610e4f868886611ca7565b9050610eab565b610ea8610e4f868686611ca7565b90505b94509492505050565b60008060008084604001516001600160a01b031663f30dba938660a001516040518263ffffffff1660e01b8152600401610ef7919060029190910b815260200190565b61010060405180830381865afa158015610f15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f399190612754565b5050505093509350505060008086604001516001600160a01b031663f30dba938860c001516040518263ffffffff1660e01b8152600401610f83919060029190910b815260200190565b61010060405180830381865afa158015610fa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc59190612754565b5050505093509350505060006040518061012001604052808960000151815260200186815260200184815260200189604001516001600160a01b031663f30583996040518163ffffffff1660e01b8152600401602060405180830381865afa158015611035573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105991906126d2565b815260200189604001516001600160a01b0316815260200189606001516001600160801b03168152602001896080015160020b81526020018960a0015160020b81526020018960c0015160020b81525090506110b481611cdb565b6020808a015183528281018690526040808401859052808b01518151634614131960e01b81529151939a506001600160a01b0316926346141319926004808401939192918290030181865afa158015611111573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113591906126d2565b606082015261114381611cdb565b95505050505050915091565b60008060008360020b12611166578260020b611173565b8260020b611173906127f8565b9050611182620d89e719612814565b60020b8111156111b85760405162461bcd60e51b81526020600482015260016024820152601560fa1b6044820152606401610d74565b6000816001166000036111cf57600160801b6111e1565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561122057608061121b826ffff97272373d413259a46990580e213a6125c5565b901c90505b600482161561124a576080611245826ffff2e50f5f656932ef12357cf3c7fdcc6125c5565b901c90505b600882161561127457608061126f826fffe5caca7e10e4e61c3624eaa0941cd06125c5565b901c90505b601082161561129e576080611299826fffcb9843d60f6159c9db58835c9266446125c5565b901c90505b60208216156112c85760806112c3826fff973b41fa98c081472e6896dfb254c06125c5565b901c90505b60408216156112f25760806112ed826fff2ea16466c96a3843ec78b326b528616125c5565b901c90505b608082161561131c576080611317826ffe5dee046a99a2a811c461f1969c30536125c5565b901c90505b610100821615611347576080611342826ffcbe86c7900a88aedcffc83b479aa3a46125c5565b901c90505b61020082161561137257608061136d826ff987a7253ac413176f2b074cf7815e546125c5565b901c90505b61040082161561139d576080611398826ff3392b0822b70005940c7a398e4b70f36125c5565b901c90505b6108008216156113c85760806113c3826fe7159475a2c29b7443b29c7fa6e889d96125c5565b901c90505b6110008216156113f35760806113ee826fd097f3bdfd2022b8845ad8f792aa58256125c5565b901c90505b61200082161561141e576080611419826fa9f746462d870fdf8a65dc1f90e061e56125c5565b901c90505b614000821615611449576080611444826f70d869a156d2a1b890bb3df62baf32f76125c5565b901c90505b61800082161561147457608061146f826f31be135f97d08fd981231505542fcfa66125c5565b901c90505b620100008216156114a057608061149b826f09aa508b5b7a84e1c677de54f3e99bc96125c5565b901c90505b620200008216156114cb5760806114c6826e5d6af8dedb81196699c329225ee6046125c5565b901c90505b620400008216156114f55760806114f0826d2216e584f5fa1ea926041bedfe986125c5565b901c90505b6208000082161561151d576080611518826b048a170391f7dc42444e8fa26125c5565b901c90505b60008460020b131561153857611535816000196125fa565b90505b61154764010000000082612836565b15611553576001611556565b60005b6115679060ff16602083901c6125ad565b949350505050565b60008080600019858709858702925082811083820303915050806000036115a8576000841161159d57600080fd5b50829004905061161c565b8084116115b457600080fd5b600084868809851960019081018716968790049682860381900495909211909303600082900391909104909201919091029190911760038402600290811880860282030280860282030280860282030280860282030280860282030280860290910302029150505b9392505050565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8211156116bb5760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e206160448201527f6e20696e743235360000000000000000000000000000000000000000000000006064820152608401610d74565b5090565b60006f7fffffffffffffffffffffffffffffff1982128015906116f257506f7fffffffffffffffffffffffffffffff8213155b6116bb5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f32382062697473000000000000000000000000000000000000000000000000006064820152608401610d74565b600080836001600160a01b0316856001600160a01b03161115611785579293925b846001600160a01b0316866001600160a01b0316116117a957610e54858585611d6b565b836001600160a01b0316866001600160a01b031610156117db576117ce868585611d6b565b9150610e93858785611de7565b610ea8858585611de7565b60006117f384848461156f565b905060008280611805576118056125e4565b848609111561161c57600019811061181c57600080fd5b80610ddd8161271e565b60008060008060005b8651518110156119c257600087602001516001600160a01b0316631698ee8289604001518a606001518b60000151868151811061186e5761186e6126eb565b602090810291909101015160409081015190517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b03938416600482015292909116602483015262ffffff166044820152606401602060405180830381865afa1580156118ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119119190612701565b905060008060008061197060405180606001604052808e608001516001600160a01b031681526020018e600001518981518110611950576119506126eb565b60200260200101518152602001876001600160a01b03168152508c610516565b9350935093509350838a61198491906125ad565b9950611990838a6125ad565b985061199c82896125ad565b97506119a881886125ad565b9650505050505080806119ba9061271e565b91505061182f565b50600086608001519050600080611a128585856001600160a01b031663ccdf7a026040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108b3573d6000803e3d6000fd5b91509150826001600160a01b031663065756db6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611a54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a7891906126d2565b6040808b015160808c015191516370a0823160e01b81526001600160a01b0392831660048201529116906370a0823190602401602060405180830381865afa158015611ac8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aec91906126d2565b611af690846125ad565b611b00919061260e565b611b0a90886125ad565b9650826001600160a01b03166342fb9d446040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6e91906126d2565b60608a015160808b01516040516370a0823160e01b81526001600160a01b0391821660048201529116906370a0823190602401602060405180830381865afa158015611bbe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611be291906126d2565b611bec90836125ad565b611bf6919061260e565b611c0090876125ad565b955050505092959194509250565b60008082600f0b12611c3457611c2f611c2a8585856001611e3a565b611f13565b611567565b611c4c611c2a8585611c458661284a565b6000611e3a565b611567906127f8565b6000808212156116bb5760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f7369746976656044820152606401610d74565b60008082600f0b12611cc357611c2f611c2a8585856001611f25565b611c4c611c2a8585611cd48661284a565b6000611f25565b6000808260e0015160020b8360c0015160020b12611cfe57506020820151611d0b565b5060208201516060830151035b600083610100015160020b8460c0015160020b1215611d2f57506040830151611d3c565b5060408301516060840151035b60008183866060015103039050610ddd8560a001516001600160801b031686600001518303600160801b61156f565b6000826001600160a01b0316846001600160a01b03161115611d8b579192915b6001600160a01b038416611ddd7bffffffffffffffffffffffffffffffff000000000000000000000000606085901b16611dc58787612870565b6001600160a01b0316866001600160a01b031661156f565b61156791906125fa565b6000826001600160a01b0316846001600160a01b03161115611e07579192915b6115676001600160801b038316611e1e8686612870565b6001600160a01b03166c0100000000000000000000000061156f565b6000836001600160a01b0316856001600160a01b03161115611e5a579293925b7bffffffffffffffffffffffffffffffff000000000000000000000000606084901b166000611e898787612870565b6001600160a01b031690506000876001600160a01b031611611eaa57600080fd5b83611edc57866001600160a01b0316611ecd8383896001600160a01b031661156f565b611ed791906125fa565b611f08565b611f08611ef38383896001600160a01b03166117e6565b886001600160a01b0316808204910615150190565b979650505050505050565b6000600160ff1b82106116bb57600080fd5b6000836001600160a01b0316856001600160a01b03161115611f45579293925b81611f6657611f616001600160801b038416611e1e8787612870565b610ddd565b610ddd6001600160801b038416611f7d8787612870565b6001600160a01b03166c010000000000000000000000006117e6565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611fd257611fd2611f99565b60405290565b60405160a0810167ffffffffffffffff81118282101715611fd257611fd2611f99565b604051601f8201601f1916810167ffffffffffffffff8111828210171561202457612024611f99565b604052919050565b6001600160a01b038116811461204157600080fd5b50565b8060020b811461204157600080fd5b803561205e81612044565b919050565b600060c0828403121561207557600080fd5b60405160c0810181811067ffffffffffffffff8211171561209857612098611f99565b6040528235815290508060208301356120b08161202c565b602082015260408301356120c38161202c565b604082015260608301356120d681612044565b60608201526120e760808401612053565b60808201526120f860a08401612053565b60a08201525092915050565b6000806000610100848603121561211a57600080fd5b6121248585612063565b9560c0850135955060e0909401359392505050565b600060c0828403121561214b57600080fd5b61161c8383612063565b61ffff8116811461204157600080fd5b60008060006060848603121561217a57600080fd5b8335925060208401359150604084013561219381612155565b809150509250925092565b803561205e8161202c565b6000606082840312156121bb57600080fd5b6121c3611faf565b905081356121d081612044565b815260208201356121e081612044565b6020820152604082013562ffffff811681146121fb57600080fd5b604082015292915050565b600060a0828403121561221857600080fd5b612220611faf565b9050813561222d8161202c565b815261223c83602084016121a9565b602082015260808201356121fb8161202c565b60008060c0838503121561226257600080fd5b61226c8484612206565b915060a083013561227c8161202c565b809150509250929050565b600060a0828403121561229957600080fd5b6122a1611fd8565b9050813567ffffffffffffffff808211156122bb57600080fd5b818401915084601f8301126122cf57600080fd5b81356020828211156122e3576122e3611f99565b6122f1818360051b01611ffb565b8281528181019350606092830285018201928884111561231057600080fd5b948201945b838610156123365761232789876121a9565b85529485019493820193612315565b81875261234483890161219e565b838801526123546040890161219e565b604088015261236481890161219e565b8188015250505050505061237a6080830161219e565b608082015292915050565b60008060006060848603121561239a57600080fd5b833567ffffffffffffffff8111156123b157600080fd5b6123bd86828701612287565b9660208601359650604090950135949350505050565b600080600060e084860312156123e857600080fd5b6123f28585612206565b9560a0850135955060c0909401359392505050565b6000806040838503121561241a57600080fd5b823567ffffffffffffffff81111561243157600080fd5b61243d85828601612287565b925050602083013561227c8161202c565b600080600080600060a0868803121561246657600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b60006020828403121561249b57600080fd5b813567ffffffffffffffff8111156124b257600080fd5b61156784828501612287565b80600f0b811461204157600080fd5b600080600080608085870312156124e357600080fd5b84356124ee8161202c565b935060208501356124fe8161202c565b9250604085013561250e8161202c565b9150606085013561251e816124be565b939692955090935050565b80516001600160801b038116811461205e57600080fd5b600080600080600060a0868803121561255857600080fd5b61256186612529565b9450602086015193506040860151925061257d60608701612529565b915061258b60808701612529565b90509295509295909350565b634e487b7160e01b600052601160045260246000fd5b600082198211156125c0576125c0612597565b500190565b60008160001904831182151516156125df576125df612597565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612609576126096125e4565b500490565b60008282101561262057612620612597565b500390565b8051801515811461205e57600080fd5b600080600080600080600060e0888a03121561265057600080fd5b875161265b8161202c565b602089015190975061266c81612044565b604089015190965061267d81612155565b606089015190955061268e81612155565b608089015190945061269f81612155565b60a089015190935060ff811681146126b657600080fd5b91506126c460c08901612625565b905092959891949750929550565b6000602082840312156126e457600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561271357600080fd5b815161161c8161202c565b60006001820161273057612730612597565b5060010190565b60006020828403121561274957600080fd5b815161161c81612155565b600080600080600080600080610100898b03121561277157600080fd5b61277a89612529565b9750602089015161278a816124be565b80975050604089015195506060890151945060808901518060060b81146127b057600080fd5b60a08a01519094506127c18161202c565b60c08a015190935063ffffffff811681146127db57600080fd5b91506127e960e08a01612625565b90509295985092959890939650565b6000600160ff1b820161280d5761280d612597565b5060000390565b60008160020b627fffff19810361282d5761282d612597565b60000392915050565b600082612845576128456125e4565b500690565b600081600f0b6f7fffffffffffffffffffffffffffffff19810361282d5761282d612597565b60006001600160a01b038381169083168181101561289057612890612597565b03939250505056fea2646970667358221220e2e506311a999403da6d37bcfce32d2eed45d0112876eba854b946c36cd2946864736f6c634300080d0033";

type UnderlyingConstructorParams =
  | [linkLibraryAddresses: UnderlyingLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnderlyingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Underlying__factory extends ContractFactory {
  constructor(...args: UnderlyingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        Underlying__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: UnderlyingLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b131e44167300e1b6d47510635310686a7\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/Position.sol:Position"]
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
      Underlying & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Underlying__factory {
    return super.connect(runner) as Underlying__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnderlyingInterface {
    return new Interface(_abi) as UnderlyingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Underlying {
    return new Contract(address, _abi, runner) as unknown as Underlying;
  }
}

export interface UnderlyingLibraryAddresses {
  ["contracts/libraries/Position.sol:Position"]: string;
}
