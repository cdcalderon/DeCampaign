// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
    }

    Request[] public requests;
    address public manager;
    uint256 public minimumContribution;
    address[] public approvers;

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

        approvers.push(msg.sender);
    }

    function createRequest(
        string memory description,
        uint256 value,
        address recipient
    ) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false
        });

        requests.push(newRequest);
    }
}
