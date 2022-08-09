pragma solidity ^0.8.15;

contract Storage {
    mapping(address => uint256) balances;
    address public owner;
    event Deposit(
        address indexed _from,
        uint256 indexed _amount,
        bytes32 message
    );
    event Withdrawal(
        address indexed _to,
        uint256 indexed _amount,
        bytes32 message
    );

    constructor() {
        owner = msg.sender;
    }

    function deposit() external payable {
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value, "Deposit successful!");
    }

    function withdraw(uint256 _amount) external payable {
        require(
            _amount <= balances[msg.sender],
            "You don't have enough balance for this"
        );
        address payable _account = payable(msg.sender);
        _account.transfer(_amount);
        balances[msg.sender] -= _amount;
        emit Withdrawal(msg.sender, _amount, "Withdrawal successful!");
    }

    function viewBalance() external view returns (uint256) {
        return balances[msg.sender];
    }
}
