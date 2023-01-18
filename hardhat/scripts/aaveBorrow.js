const { getNamedAccounts, ethers } = require("hardhat");
const { getWeth } = require("../scripts/getWeth");

async function main() {
  //protocol treats everything as an erc20

  await getWeth();
  const { deployer } = await getNamedAccounts();
  // abi and contract address for aave

  // lending pool address provider: 0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5
  // lending pool:
  const lendingPool = await getLendingPool(deployer);
  console.log(`LendingPool address: ${lendingPool.address}`);

  // deposit
  // approve aave contract
  const wethTokenAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
}

async function getLendingPool(account) {
  const lendingPoolAddressProvider = await ethers.getContractAt(
    "ILendingPoolAddressesProvider",
    "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
    account
  );

  const lendingPoolAddress = await lendingPoolAddressProvider.getLendingPool();
  const lendingPool = await ethers.getContractAt(
    "ILendingPool",
    lendingPoolAddress,
    account
  );

  return lendingPool;
}

async function approveERC20(
  contractAddress,
  spenderAddress,
  amountToSpend,
  account
) {
  const erc20Token = await ethers.getContractAt("");
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
