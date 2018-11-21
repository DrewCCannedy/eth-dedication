pragma solidity ^0.4.24;

contract Dedication {
    string public dedicatedTo;
    string public content;
    
    constructor (string newDedicatedTo, string newContent) public {
        dedicatedTo = newDedicatedTo;
        content = newContent;
    }
    
    function getDedication () public view returns (string, string) {
        return (dedicatedTo, content);
    }
}

contract DedicationFactory {
    address[] public deployedDedications;
    mapping (address => address[]) public dedicationsByAddress;
    
    function newDedication (string dedicatedTo, string content) public {
        address tempDedication = new Dedication(dedicatedTo, content);
        deployedDedications.push(tempDedication);
        dedicationsByAddress[msg.sender].push(tempDedication);
    }

    function getDeployedDedications() public view returns (address[]) {
        return deployedDedications;
    }

    function getDedicationsByAddress(address lookupAddress) public view returns (address[]) {
        return dedicationsByAddress[lookupAddress];
    }
}