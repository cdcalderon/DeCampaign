const { assert, expect } = require("chai");
const { network, deployments, getNamedAccounts, ethers } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Campaign Unit Tests", () => {
      const chainId = network.config.chainId;
      let campaignContractFactory, campaign;
      beforeEach(async () => {
        const { deployer } = await getNamedAccounts();
        await deployments.fixture(["all"]);
        campaignContractFactory = await ethers.getContractFactory("Campaign"); // Returns a new connection to the Campaign contract
        campaign = await campaignContractFactory.deploy();
      });

      describe("constructor ", () => {
        it("initialize the Campaign correctly", async () => {});
      });
    });
