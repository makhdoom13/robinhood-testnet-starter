async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying from:", deployer.address);

  const DemoToken = await ethers.getContractFactory("DemoToken");
  const token = await DemoToken.deploy();
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log("DemoToken deployed at:", tokenAddress);

  const StakingVault = await ethers.getContractFactory("StakingVault");
  const vault = await StakingVault.deploy(tokenAddress);
  await vault.waitForDeployment();
  console.log("StakingVault deployed at:", await vault.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
