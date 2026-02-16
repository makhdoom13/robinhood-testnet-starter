async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const DemoToken = await ethers.getContractFactory("DemoToken");
  const token = await DemoToken.deploy();
  await token.waitForDeployment();
  console.log("DemoToken:", await token.getAddress());

  const Vault = await ethers.getContractFactory("StakingVault");
  const vault = await Vault.deploy(await token.getAddress());
  await vault.waitForDeployment();
  console.log("StakingVault:", await vault.getAddress());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
