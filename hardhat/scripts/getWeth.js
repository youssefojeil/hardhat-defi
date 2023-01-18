const { getNamedAccounts } = require("hardhat");

async function getWeth() {
  const { deployer } = await getNamedAccounts();

  // call the deposit func on weth contract
}

module.exports = { getWeth };
