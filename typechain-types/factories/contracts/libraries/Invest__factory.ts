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
  Invest,
  InvestInterface,
} from "../../../contracts/libraries/Invest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnAmount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnAmount1",
        type: "uint256",
      },
    ],
    name: "LPBurned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
    ],
    name: "LogBurn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fee0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee1",
        type: "uint256",
      },
    ],
    name: "LogCollectedFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
    ],
    name: "LogMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct Rebalance",
        name: "rebalanceParams",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapDelta0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapDelta1",
        type: "uint256",
      },
    ],
    name: "LogRebalance",
    type: "event",
  },
] as const;

const _bytecode =
  "0x6132e061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c8063092ea7f41461005b578063668716331461007d578063836a1040146100925780639eea5f66146100cb575b600080fd5b81801561006757600080fd5b5061007b6100763660046129cc565b6100eb565b005b81801561008957600080fd5b5061007b611409565b81801561009e57600080fd5b506100b26100ad366004612a2c565b611638565b6040805192835260208301919091520160405180910390f35b8180156100d757600080fd5b506100b26100e6366004612a2c565b611c09565b6040805160808082018352600080835260208084018290527fe3ad27f6776c50a3e2a472a1ca98705922a7e91abcd31c1ccc4121e91e8cee39546001600160a01b03908116858701527fe3ad27f6776c50a3e2a472a1ca98705922a7e91abcd31c1ccc4121e91e8cee3a5481166060808701919091527fe3ad27f6776c50a3e2a472a1ca98705922a7e91abcd31c1ccc4121e91e8cee3880548851968701895285875293860185905296850184905284018390521691905b6101ad8680612a64565b90508110156106ee57604084015160608501516000916001600160a01b03861691631698ee8291906101df8b80612a64565b878181106101ef576101ef612ab5565b610206926080918202019081019150606001612adc565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015262ffffff166044820152606401602060405180830381865afa15801561025d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102819190612af9565b9050600073__$b131e44167300e1b6d47510635310686a7$__635f49415b83306102ab8c80612a64565b888181106102bb576102bb612ab5565b6102d49260406080909202019081019150602001612b25565b6102de8d80612a64565b898181106102ee576102ee612ab5565b6103079260606080909202019081019150604001612b25565b6040516001600160e01b031960e087901b1681526001600160a01b039485166004820152939092166024840152600290810b60448401520b6064820152608401602060405180830381865af4158015610364573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103889190612b57565b9050806001600160801b03166000036103a25750506106dc565b60006001600160801b036103b68a80612a64565b868181106103c6576103c6612ab5565b6103dc9260206080909202019081019150612b74565b6001600160801b0316036103f1575080610424565b6103fb8980612a64565b8581811061040b5761040b612ab5565b6104219260206080909202019081019150612b74565b90505b6000610496846104348c80612a64565b8881811061044457610444612ab5565b61045d9260406080909202019081019150602001612b25565b6104678d80612a64565b8981811061047757610477612ab5565b6104909260606080909202019081019150604001612b25565b85612148565b9050826001600160801b0316826001600160801b0316036106785760008073__$b131e44167300e1b6d47510635310686a7$__630c3c0bfc60098d016104dc8f80612a64565b8b8181106104ec576104ec612ab5565b9050608002016020016040518363ffffffff1660e01b8152600401610512929190612bd5565b6040805180830381865af415801561052e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105529190612c5e565b91509150816105955760405162461bcd60e51b815260040161058c9060208082526004908201526352524e4560e01b604082015260600190565b60405180910390fd5b60098b0180546105a790600190612ca2565b815481106105b7576105b7612ab5565b906000526020600020018b60090182815481106105d6576105d6612ab5565b6000918252602090912082549101805462ffffff92831662ffffff19821681178355845463010000009081900485160265ffffffffffff199092161717808255925466010000000000009081900490921690910268ffffff0000000000001990921691909117905560098b0180548061065157610651612cb9565b6000828152602090208101600019908101805468ffffffffffffffffff1916905501905550505b805186518790610689908390612ccf565b90525060208082015190870180516106a2908390612ccf565b90525060408082015190870180516106bb908390612ccf565b90525060608082015190870180516106d4908390612ccf565b905250505050505b806106e681612ce7565b9150506101a3565b508051606086013511156107295760405162461bcd60e51b8152602060048201526002602482015261042360f41b604482015260640161058c565b8460800135816020015110156107665760405162461bcd60e51b8152602060048201526002602482015261423160f01b604482015260640161058c565b60008160400151118061077d575060008160600151115b156107d55761079481604001518260600151612241565b6040808201516060830151825191825260208201527fdbbb3a796242c9562af701570b096cb2478cd507fcd2d4080025883b10a623a5910160405180910390a15b5060006107e56040860186612d00565b604001351115610d3d5761081a6107ff6040860186612d00565b610810906040810190602001612d20565b600c8501906122f2565b61084b5760405162461bcd60e51b8152602060048201526002602482015261272960f11b604482015260640161058c565b60408083015190516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610896573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ba9190612d3d565b60608401516040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa15801561090a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092e9190612d3d565b90506109676109406040880188612d00565b610951906040810190602001612d20565b60408601516001600160a01b0316906000612317565b61099e6109776040880188612d00565b610988906040810190602001612d20565b60608601516001600160a01b0316906000612317565b6109d46109ae6040880188612d00565b6109bf906040810190602001612d20565b60408601516001600160a01b03169084612317565b610a0a6109e46040880188612d00565b6109f5906040810190602001612d20565b60608601516001600160a01b03169083612317565b6000610a196040880188612d00565b610a2a906040810190602001612d20565b6001600160a01b0316610a406040890189612d00565b610a4a9080612d56565b604051610a58929190612d9d565b6000604051808303816000865af19150503d8060008114610a95576040519150601f19603f3d011682016040523d82523d6000602084013e610a9a565b606091505b5050905080610ad05760405162461bcd60e51b8152602060048201526002602482015261534360f01b604482015260640161058c565b60408086015190516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610b1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3f9190612d3d565b60608701516040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610b8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb39190612d3d565b9050610bc260408a018a612d00565b610bd39060a0810190608001612db8565b15610c6a57610be560408a018a612d00565b610bf3906060013585612ccf565b8110158015610c1c5750610c0a60408a018a612d00565b610c18906040013586612ca2565b8210155b610c4d5760405162461bcd60e51b815260206004820152600260248201526129a360f11b604482015260640161058c565b610c578286612ca2565b9150610c638482612ca2565b9050610cf8565b610c7760408a018a612d00565b610c85906060013586612ccf565b8210158015610cae5750610c9c60408a018a612d00565b610caa906040013585612ca2565b8110155b610cdf5760405162461bcd60e51b815260206004820152600260248201526129a360f11b604482015260640161058c565b610ce98583612ca2565b9150610cf58185612ca2565b90505b7fab3abe7e2ad787892344ed4ada44aad53c7d53e9d6b5ee91f20bd30ed39540b7898383604051610d2b93929190612fe5565b60405180910390a15050505050610d7a565b7fab3abe7e2ad787892344ed4ada44aad53c7d53e9d6b5ee91f20bd30ed39540b784600080604051610d7193929190612fe5565b60405180910390a15b60005b610d8a6020860186612a64565b905081101561123d57600073__$b131e44167300e1b6d47510635310686a7$__630c3c0bfc60098701610dc060208a018a612a64565b86818110610dd057610dd0612ab5565b9050608002016020016040518363ffffffff1660e01b8152600401610df6929190612bd5565b6040805180830381865af4158015610e12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e369190612c5e565b5090506000836001600160a01b0316631698ee82866040015187606001518a8060200190610e649190612a64565b88818110610e7457610e74612ab5565b610e8b926080918202019081019150606001612adc565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015262ffffff166044820152606401602060405180830381865afa158015610ee2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f069190612af9565b9050816110ab576001600160a01b038116610f495760405162461bcd60e51b815260206004820152600360248201526204e55560ec1b604482015260640161058c565b610f56600a8701826122f2565b610f865760405162461bcd60e51b81526020600482015260016024820152600560fc1b604482015260640161058c565b73__$57c880716d25c772e0b1e547659075b66d$__636b01882082610fae60208b018b612a64565b87818110610fbe57610fbe612ab5565b9050608002016020016040518363ffffffff1660e01b8152600401610fe492919061300a565b602060405180830381865af4158015611001573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110259190613027565b6110575760405162461bcd60e51b815260206004820152600360248201526252545360e81b604482015260640161058c565b600986016110686020890189612a64565b8581811061107857611078612ab5565b83546001810185556000948552602094859020608090920293909301939093019290910190506110a88282613044565b50505b6000806001600160a01b038316633c8a7d8d306110cb60208d018d612a64565b898181106110db576110db612ab5565b6110f49260406080909202019081019150602001612b25565b61110160208e018e612a64565b8a81811061111157611111612ab5565b61112a9260606080909202019081019150604001612b25565b61113760208f018f612a64565b8b81811061114757611147612ab5565b61115d9260206080909202019081019150612b74565b6040516001600160e01b031960e087901b1681526001600160a01b039094166004850152600292830b6024850152910b60448301526001600160801b0316606482015260a06084820152600060a482015260c40160408051808303816000875af11580156111cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f391906130d0565b9150915081876000018181516112099190612ccf565b905250602087018051829190611220908390612ccf565b9052508493506112359250839150612ce79050565b915050610d7d565b50815160a085013511156112785760405162461bcd60e51b8152602060048201526002602482015261044360f41b604482015260640161058c565b8360c00135826020015110156112b55760405162461bcd60e51b8152602060048201526002602482015261443160f01b604482015260640161058c565b600683015460018401546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015611304573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113289190612d3d565b101561135c5760405162461bcd60e51b815260206004820152600360248201526204d42360ec1b604482015260640161058c565b600783015460028401546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156113ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cf9190612d3d565b10156114035760405162461bcd60e51b81526020600482015260036024820152624d423160e81b604482015260640161058c565b50505050565b7fe3ad27f6776c50a3e2a472a1ca98705922a7e91abcd31c1ccc4121e91e8cee38600080805b60098401548110156115ef57600084600901828154811061145257611452612ab5565b60009182526020808320604080516060810182529390910154600281810b855263010000008204810b938501939093526601000000000000900462ffffff16838201819052895460018b0154938b01549251630b4c774160e11b81526001600160a01b03948516600482015292841660248401526044830191909152929450911690631698ee8290606401602060405180830381865afa1580156114fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151e9190612af9565b8251602084015160405163a34123a760e01b8152600292830b6004820152910b6024820152600060448201529091506001600160a01b0382169063a34123a79060640160408051808303816000875af115801561157f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a391906130d0565b50506000806115bb8385600001518660200151612480565b90925090506115ca8288612ccf565b96506115d68187612ccf565b95505050505080806115e790612ce7565b91505061142f565b506115fa8282612241565b60408051838152602081018390527fdbbb3a796242c9562af701570b096cb2478cd507fcd2d4080025883b10a623a5910160405180910390a1505050565b6000807fe3ad27f6776c50a3e2a472a1ca98705922a7e91abcd31c1ccc4121e91e8cee388561168e5760405162461bcd60e51b81526020600482015260026024820152614d4160f01b604482015260640161058c565b3084158015906117e55773__$3d23d8578387a47facd93bb77f6fe6e81b$__6383d7ba9f6040518060a0016040528086600901805480602002602001604051908101604052809291908181526020016000905b828210156117375760008481526020908190206040805160608101825291850154600281810b845263010000008204900b838501526601000000000000900462ffffff16908201528252600190920191016116e1565b5050509082525086546001600160a01b03908116602083015260018801548116604080840191909152600289015482166060840152908716608090920191909152516001600160e01b031960e084901b16815261179b91908c908b906004016130f4565b6040805180830381865af41580156117b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117db91906130d0565b90955093506118e3565b60038301546004840154670de0b6b3a764000091906118058b838561252b565b97506118128b828561252b565b965061181f8b8385612574565b60000361182b57600097505b6118368b8285612574565b60000361184257600096505b6000826000036118545760001961185f565b61185f898585612574565b90506000826000036118735760001961187e565b61187e898685612574565b90508c81831061188e5781611890565b825b146118dd5760405162461bcd60e51b815260206004820152600560248201527f4130264131000000000000000000000000000000000000000000000000000000604482015260640161058c565b50505050505b8415611903576001830154611903906001600160a01b0316338488612622565b8315611923576002830154611923906001600160a01b0316338487612622565b8015611bb25760005b6009840154811015611bb057600084600901828154811061194f5761194f612ab5565b60009182526020808320604080516060810182529390910154600281810b855263010000008204810b938501939093526601000000000000900462ffffff16838201819052895460018b0154938b01549251630b4c774160e11b81526001600160a01b03948516600482015292841660248401526044830191909152929450911690631698ee8290606401602060405180830381865afa1580156119f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1b9190612af9565b82516020840151604051635f49415b60e01b81526001600160a01b03808516600483015289166024820152600292830b6044820152910b606482015290915060009073__$b131e44167300e1b6d47510635310686a7$__90635f49415b90608401602060405180830381865af4158015611a99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611abd9190612b57565b9050611adb611ad6826001600160801b03168e8d612574565b61265a565b9050806001600160801b0316600003611af657505050611b9e565b82516020840151604051633c8a7d8d60e01b81526001600160a01b038981166004830152600293840b60248301529190920b60448301526001600160801b038316606483015260a06084830152600060a4830152831690633c8a7d8d9060c40160408051808303816000875af1158015611b74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b9891906130d0565b50505050505b80611ba881612ce7565b91505061192c565b505b60408051898152602081018790529081018590526001600160a01b038816907f5f11830295067c4bcc7d02d4e3b048cd7427be50a3aeb6afc9d3d559ee64bcfa9060600160405180910390a2505050935093915050565b600080807fe3ad27f6776c50a3e2a472a1ca98705922a7e91abcd31c1ccc4121e91e8cee389050611c5b6040518060800160405280600081526020016000815260200160008152602001600081525090565b60005b6009830154811015611eaf576000836009018281548110611c8157611c81612ab5565b60009182526020808320604080516060810182529390910154600281810b855263010000008204810b938501939093526601000000000000900462ffffff16838201819052885460018a0154938a01549251630b4c774160e11b81526001600160a01b03948516600482015292841660248401526044830191909152929450911690631698ee8290606401602060405180830381865afa158015611d29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d4d9190612af9565b82516020840151604051635f49415b60e01b81526001600160a01b0384166004820152306024820152600292830b6044820152910b606482015290915060009073__$b131e44167300e1b6d47510635310686a7$__90635f49415b90608401602060405180830381865af4158015611dc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ded9190612b57565b9050611e06611ad6826001600160801b03168d8c612574565b9050806001600160801b0316600003611e2157505050611e9d565b6000611e37838560000151866020015185612148565b9050806040015186604001818151611e4f9190612ccf565b9052506060808201519087018051611e68908390612ccf565b905250805186518790611e7c908390612ccf565b9052506020808201519087018051611e95908390612ccf565b905250505050505b80611ea781612ce7565b915050611c5e565b50848703611ec557611ec560098301600061298a565b611ed781604001518260600151612241565b8051600683015460018401546040516370a0823160e01b815230600482015260009392916001600160a01b0316906370a0823190602401602060405180830381865afa158015611f2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f4f9190612d3d565b611f599190612ca2565b611f639190612ca2565b6020830151600785015460028601546040516370a0823160e01b81523060048201529394506000936001600160a01b03909116906370a0823190602401602060405180830381865afa158015611fbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fe19190612d3d565b611feb9190612ca2565b611ff59190612ca2565b9050612002828a89612574565b955061200f818a89612574565b835190955061201e9087612ccf565b95508260200151856120309190612ccf565b94508515612051576001840154612051906001600160a01b031689886126dd565b8415612070576002840154612070906001600160a01b031689876126dd565b8251602080850151604080519384529183015233917fbcc5876d59ecdf66ef7ccae24657b11650939218782f8d741e78fd3c35d285a3910160405180910390a26040808401516060850151825191825260208201527fdbbb3a796242c9562af701570b096cb2478cd507fcd2d4080025883b10a623a5910160405180910390a1604080518a8152602081018890529081018690526001600160a01b038916907f86dacd5ce62967ebd3d915a82b22ad7e159538e50c7ba451e073fec048d9f1279060600160405180910390a250505050935093915050565b6121736040518060800160405280600081526020016000815260200160008152602001600081525090565b60405163a34123a760e01b8152600285810b600483015284900b60248201526001600160801b03831660448201526001600160a01b0386169063a34123a79060640160408051808303816000875af11580156121d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121f791906130d0565b6020830152815260008061220c878787612480565b8451919350915061221d9083612ca2565b604084015260208301516122319082612ca2565b6060840152509095945050505050565b7fe3ad27f6776c50a3e2a472a1ca98705922a7e91abcd31c1ccc4121e91e8cee3d547fe3ad27f6776c50a3e2a472a1ca98705922a7e91abcd31c1ccc4121e91e8cee389061ffff1661271061229682866131a8565b6122a091906131dd565b8260060160008282546122b39190612ccf565b9091555061271090506122ca61ffff8316856131a8565b6122d491906131dd565b8260070160008282546122e79190612ccf565b909155505050505050565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b8015806123915750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561236b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061238f9190612d3d565b155b6124035760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161058c565b6040516001600160a01b03831660248201526044810182905261247b90849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b03199093169290921790915261270d565b505050565b6040516309e3d67b60e31b8152306004820152600283810b602483015282900b60448201526001600160801b0360648201819052608482015260009081906001600160a01b03861690634f1eb3d89060a40160408051808303816000875af11580156124f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061251491906131ff565b6001600160801b0391821697911695509350505050565b6000612538848484612574565b90506000828061254a5761254a6131c7565b848609111561231057600019811061256157600080fd5b8061256b81612ce7565b95945050505050565b60008080600019858709858702925082811083820303915050806000036125ad57600084116125a257600080fd5b508290049050612310565b8084116125b957600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6040516001600160a01b03808516602483015283166044820152606481018290526114039085906323b872dd60e01b9060840161242f565b60006001600160801b038211156126d95760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f3238206269747300000000000000000000000000000000000000000000000000606482015260840161058c565b5090565b6040516001600160a01b03831660248201526044810182905261247b90849063a9059cbb60e01b9060640161242f565b6000612762826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166127f29092919063ffffffff16565b80519091501561247b57808060200190518101906127809190613027565b61247b5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161058c565b60606128018484600085612809565b949350505050565b6060824710156128815760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161058c565b6001600160a01b0385163b6128d85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161058c565b600080866001600160a01b031685876040516128f49190613265565b60006040518083038185875af1925050503d8060008114612931576040519150601f19603f3d011682016040523d82523d6000602084013e612936565b606091505b5091509150612946828286612951565b979650505050505050565b60608315612960575081612310565b8251156129705782518084602001fd5b8160405162461bcd60e51b815260040161058c9190613277565b50805460008255906000526020600020908101906129a891906129ab565b50565b5b808211156126d957805468ffffffffffffffffff191681556001016129ac565b6000602082840312156129de57600080fd5b813567ffffffffffffffff8111156129f557600080fd5b820160e0818503121561231057600080fd5b6001600160a01b03811681146129a857600080fd5b8035612a2781612a07565b919050565b600080600060608486031215612a4157600080fd5b833592506020840135612a5381612a07565b929592945050506040919091013590565b6000808335601e19843603018112612a7b57600080fd5b83018035915067ffffffffffffffff821115612a9657600080fd5b6020019150600781901b3603821315612aae57600080fd5b9250929050565b634e487b7160e01b600052603260045260246000fd5b62ffffff811681146129a857600080fd5b600060208284031215612aee57600080fd5b813561231081612acb565b600060208284031215612b0b57600080fd5b815161231081612a07565b8060020b81146129a857600080fd5b600060208284031215612b3757600080fd5b813561231081612b16565b6001600160801b03811681146129a857600080fd5b600060208284031215612b6957600080fd5b815161231081612b42565b600060208284031215612b8657600080fd5b813561231081612b42565b8035612b9c81612b16565b60020b82526020810135612baf81612b16565b60020b60208301526040810135612bc581612acb565b62ffffff81166040840152505050565b6000608082016080835280855480835260a08501915086600052602092508260002060005b82811015612c35578154600281810b8652601882901c900b8686015260301c62ffffff16604085015260609093019260019182019101612bfa565b50505080925050612c4881840185612b91565b509392505050565b80151581146129a857600080fd5b60008060408385031215612c7157600080fd5b8251612c7c81612c50565b6020939093015192949293505050565b634e487b7160e01b600052601160045260246000fd5b600082821015612cb457612cb4612c8c565b500390565b634e487b7160e01b600052603160045260246000fd5b60008219821115612ce257612ce2612c8c565b500190565b600060018201612cf957612cf9612c8c565b5060010190565b60008235609e19833603018112612d1657600080fd5b9190910192915050565b600060208284031215612d3257600080fd5b813561231081612a07565b600060208284031215612d4f57600080fd5b5051919050565b6000808335601e19843603018112612d6d57600080fd5b83018035915067ffffffffffffffff821115612d8857600080fd5b602001915036819003821315612aae57600080fd5b8183823760009101908152919050565b8035612a2781612c50565b600060208284031215612dca57600080fd5b813561231081612c50565b6000808335601e19843603018112612dec57600080fd5b830160208101925035905067ffffffffffffffff811115612e0c57600080fd5b8060071b3603831315612aae57600080fd5b8183526000602080850194508260005b85811015612e6d578135612e4181612b42565b6001600160801b03168752612e5a838801838501612b91565b6080968701969190910190600101612e2e565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008135601e19833603018112612eb757600080fd5b8201803567ffffffffffffffff811115612ed057600080fd5b803603841315612edf57600080fd5b60a08552612ef460a086018260208501612e78565b915050612f0360208401612a1c565b6001600160a01b0381166020860152506040830135604085015260608301356060850152612f3360808401612dad565b8015156080860152612c48565b6000612f4c8283612dd5565b60e08552612f5e60e086018284612e1e565b915050612f6e6020840184612dd5565b8583036020870152612f81838284612e1e565b925050506040830135609e19843603018112612f9c57600080fd5b8482036040860152612fb082858301612ea1565b915050606083013560608501526080830135608085015260a083013560a085015260c083013560c08501528091505092915050565b606081526000612ff86060830186612f40565b60208301949094525060400152919050565b6001600160a01b0383168152608081016123106020830184612b91565b60006020828403121561303957600080fd5b815161231081612c50565b813561304f81612b16565b815462ffffff82811662ffffff198316178455602085013561307081612b16565b8060181b9050818416935065ffffff00000091508082168465ffffffffffff1985161717855560408601356130a481612acb565b911668ffffffffffffffffff19929092169092171760309190911b68ffffff0000000000001617905550565b600080604083850312156130e357600080fd5b505080516020909101519092909150565b6060808252845160a083830152805161010084018190526000929160209190820190610120860190855b8181101561315a5783518051600290810b855286820151900b8685015260409081015162ffffff1690840152928401929185019160010161311e565b5050828901516001600160a01b039081166080888101919091526040808c0151831660a08a0152958b0151821660c08901529099015190981660e08601525083019490945250919091015290565b60008160001904831182151516156131c2576131c2612c8c565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826131fa57634e487b7160e01b600052601260045260246000fd5b500490565b6000806040838503121561321257600080fd5b825161321d81612b42565b602084015190925061322e81612b42565b809150509250929050565b60005b8381101561325457818101518382015260200161323c565b838111156114035750506000910152565b60008251612d16818460208701613239565b6020815260008251806020840152613296816040850160208701613239565b601f01601f1916919091016040019291505056fea26469706673582212209e85c5f760104c8e79e53197f97442fdfa4c4156d96f1c4a6b08cec20d008d6e64736f6c634300080d0033";

type InvestConstructorParams =
  | [linkLibraryAddresses: InvestLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InvestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Invest__factory extends ContractFactory {
  constructor(...args: InvestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Invest__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: InvestLibraryAddresses): string {
    let linkedBytecode = _bytecode;

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

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$3d23d8578387a47facd93bb77f6fe6e81b\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/Underlying.sol:Underlying"]
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
      Invest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Invest__factory {
    return super.connect(runner) as Invest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InvestInterface {
    return new Interface(_abi) as InvestInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Invest {
    return new Contract(address, _abi, runner) as unknown as Invest;
  }
}

export interface InvestLibraryAddresses {
  ["contracts/libraries/Position.sol:Position"]: string;
  ["contracts/libraries/Pool.sol:Pool"]: string;
  ["contracts/libraries/Underlying.sol:Underlying"]: string;
}
