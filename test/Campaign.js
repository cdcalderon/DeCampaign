const { assert, expect } = require("chai");
const { network, deployments, getNamedAccounts, ethers } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Campaign Unit Tests", () => {
      const chainId = network.config.chainId;

      beforeEach(async () => {
        const { deployer } = await getNamedAccounts();
        await deployments.fixture(["all"]);
        raffleContract = await ethers.getContract("Campaign"); // Returns a new connection to the Campaign contract
        raffle = await ethers.getContract("Campaign", deployer);
      });

      describe("constructor ", () => {
        it("initialize the Campaign correctly", async () => {});
      });
    });
