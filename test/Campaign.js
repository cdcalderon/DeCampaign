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
      let CampaignContract, campaign, deployer;
      const MIN_CONTRIBUTION = ethers.utils.parseEther("0.01"); // 0.1 ETH
      beforeEach(async () => {
        const accounts = await ethers.getSigners();
        deployer = accounts[0];
        const CampaignContract = await ethers.getContractFactory("Campaign");
        const campaign = await CampaignContract.deploy(MIN_CONTRIBUTION);
      });

      describe("constructor ", () => {
        it("initialize the Campaign correctly", async () => {});
      });
    });
