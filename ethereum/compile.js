const fs = require('fs-extra');
const path = require('path');
const solc = require('solc');

//delete build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//compile solidity contracts
const campaignPath = path.resolve(__dirname, 'contracts', 'Dedication.sol');
const source = fs.readFileSync(campaignPath, 'utf-8');
const output = solc.compile(source, 1).contracts;

//create build folder and create compiled contract files
fs.ensureDirSync(buildPath);
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}