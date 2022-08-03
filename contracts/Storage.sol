pragma solidity ^0.8.15;

contract Storage {
    mapping(address => uint256) balances;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 _amount) external payable {
        require(
            _amount <= balances[msg.sender],
            "You don't have enough balance for this"
        );
        address payable _account = payable(msg.sender);
        _account.transfer(_amount);
    }

    function viewBalance() external view returns (uint256) {
        return balances[msg.sender];
    }
}
