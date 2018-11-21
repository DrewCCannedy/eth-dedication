pragma solidity ^0.4.24;

contract Dedication {
    address public owner;
    string public dedicatedTo;
    string public content;
    
    modifier restricted() {
        require(msg.sender == owner);
        _;
    }
    
    constructor (address newOwner, string newDedicatedTo, string newContent) public {
        owner = newOwner;
        dedicatedTo = newDedicatedTo;
        content = newContent;
    }
    
    function getDedication () public view returns (string, string) {
        return (dedicatedTo, content);
    }
    
    function setDedicatedTo (string newDedicatedTo) public restricted {
        dedicatedTo = newDedicatedTo;
    }
    
    function setContent (string newContent) public restricted {
        content = newContent;
    }
}

contract DedicationFactory {
    address[] public deployedDedications;
    mapping (address => address[]) public dedicationsByAddress;
    
    function newDedication (string dedicatedTo, string content) public {
        address tempDedication = new Dedication(msg.sender, dedicatedTo, content);
        deployedDedications.push(tempDedication);
        dedicationsByAddress[msg.sender].push(tempDedication);
    }
}