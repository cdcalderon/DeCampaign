// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    uint256 numRequests;
    mapping(uint256 => Request) requests;

    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) approvers;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint256 _minimumContribution) {
        manager = msg.sender;
        minimumContribution = _minimumContribution;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
    }

    function createRequest(
        string memory description,
        uint256 value,
        address recipient
    ) public restricted {
        Request storage r = requests[numRequests++];
        r.description = description;
        r.value = value;
        r.recipient = recipient;
        r.complete = false;
        r.approvalCount = 0;
    }

    function approveRequest(uint256 index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]); // calling is a donator
        require(!request.approvals[msg.sender]); // has not voted yet

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest() public restricted {}
}
