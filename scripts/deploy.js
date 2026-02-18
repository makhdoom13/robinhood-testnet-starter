async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const DemoToken = await ethers.getContractFactory("DemoToken");
  const token = await DemoToken.deploy();
  await token.waitForDeployment();

  console.log("DemoToken deployed to:", await token.getAddress());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
