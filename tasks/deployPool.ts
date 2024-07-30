import { HardhatUserConfig, task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { getAddresses } from "../src/addresses";
import { ArrakisV2 as ArrakisV2Type } from "../typechain/contracts/ArrakisV2";
import { Contract, getDefaultProvider } from "ethers";

async function deployArtifact(
  contractName: any,
  libraries: any,
  hre: HardhatRuntimeEnvironment,
  shouldVerify: boolean = true
): Promise<string> {
  console.log("deploying: ", contractName);

  const hardhat = await import("hardhat");
  const { deploy } = hardhat.deployments;
  const deployer = (await hardhat.getUnnamedAccounts())[0];

  console.log("libraries:", JSON.stringify(libraries));
  const artifact = await deploy(contractName, {
    from: deployer,
    libraries,
  });
  if (shouldVerify) {
    await hre.run("verify", { address: artifact.address });
  }

  console.log("-----");

  return artifact.address;
}

async function approveToken(
  tokenAddr: string,
  toAddr: string,
  hre: HardhatRuntimeEnvironment
) {
  const [signer] = await hre.ethers.getSigners();
  let token = new hre.ethers.Contract(
    tokenAddr,
    [
      "function decimals() external view returns (uint8)",
      "function balanceOf(address account) public view returns (uint256)",
      "function approve(address spender, uint256 amount) external returns (bool)",
      "function transfer(address to, uint256 amount) external returns (bool)",
    ],
    signer
  );
  await token.approve(toAddr, hre.ethers.MaxUint256);
}

export default function () {
  task("deployPool", "Deploy ArrakisV2 pool").setAction(
    async (taskArgs: any, hre: HardhatRuntimeEnvironment) => {
      await hre.run("clean");
      await hre.run("compile");

      // set this for each vault separately
      const tokenName = "BTCETH5BB";
      const tokenSymbol = "BE5BB";
      const token0 = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
      const token1 = "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6";
      const ownerAddr = "0x3ed85f0488EdF594F212c5346E7893B42EC33Af7";
      const managerAddr = "0x3FBc2F0BB12aeCaF80FFB5152b8ee912f1e1B5a3";
      const init0 = "299940012000000";
      const init1 = "100";
      const routers = ["0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2"];
      const fees = [500];

      // arbitrum settings
      const addresses = getAddresses(hre.network.name);
      const factoryAddr = addresses.UniswapV3Factory;

      const shouldVerify: boolean = hre.network.name != "hardhat";

      const [signer] = await hre.ethers.getSigners();

      // deploying libraries
      const poolAddress = await deployArtifact("Pool", {}, hre, shouldVerify);
      const positionAddress = await deployArtifact(
        "Position",
        {},
        hre,
        shouldVerify
      );
      const underlyingAddress = await deployArtifact(
        "Underlying",
        { Position: positionAddress },
        hre,
        shouldVerify
      );
      const investAddress = await deployArtifact(
        "Invest",
        {
          Pool: poolAddress,
          Position: positionAddress,
          Underlying: underlyingAddress,
        },
        hre,
        shouldVerify
      );

      // deploying proxy
      console.log("Deploying ArrakisV2");
      const ArrakisV2 = await hre.ethers.getContractFactory("ArrakisV2", {
        libraries: { Invest: investAddress },
      });
      console.log("Deploying ArrakisV2 proxy");
      const arrakisV2: Contract = (await hre.upgrades.deployProxy(
        ArrakisV2,
        [
          tokenName,
          tokenSymbol,
          [
            fees,
            token0,
            token1,
            ownerAddr,
            init0,
            init1,
            managerAddr,
            routers,
            factoryAddr,
          ],
        ],
        {
          constructorArgs: [],
          kind: "uups",
          unsafeAllow: ["external-library-linking"],
          redeployImplementation: "onchange",
        }
      )) as ArrakisV2Type;
      const arrakisV2Address: string = arrakisV2.target.toString();

      if (shouldVerify) {
        console.log("Verifying: ArrakisV2 implementation");
        const arrakisV2ImplAddress =
          await hre.upgrades.erc1967.getImplementationAddress(arrakisV2Address);
        await hre.run("verify:verify", { address: arrakisV2ImplAddress });
        console.log("Verifying: ArrakisV2 proxy");
        await hre.run("verify:verify", { address: arrakisV2Address });
      }
      console.log("ArrakisV2 proxy deployed at: ", arrakisV2Address);

      await approveToken(token0, arrakisV2Address, hre);
      await approveToken(token1, arrakisV2Address, hre);
      console.log("\nminting 1 token");
      await arrakisV2.mint(hre.ethers.parseEther("1"), signer.address);
      console.log("\nminting again 1 token (triggers different code path)");
      await arrakisV2.mint(hre.ethers.parseEther("1"), signer.address);
    }
  );
}
