// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Campaign {
    address public manager;
    uint256 public minimumContribution;
    address[] public approvers;

    constructor(uint256 _minimumContribution) {
        manager = msg.sender;
        minimumContribution = _minimumContribution;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers.push(msg.sender);
    }
}
