const { network } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  // If we are on a local development network, we need to deploy mocks!
};
module.exports.tags = ["all", "mocks"];
