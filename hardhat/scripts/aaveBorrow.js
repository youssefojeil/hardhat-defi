const { getNamedAccounts } = require("hardhat");
const { getWeth } = require("../scripts/getWeth");

async function main() {
  //protocol treats everything as an erc20

  await getWeth();
  const { deployer } = await getNamedAccounts();
  // abi and contract address for aave

  // lending pool address provider: 0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5
  // lending pool:
}

async function getLendingPool() {}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
