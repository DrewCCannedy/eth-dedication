const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/DedicationFactory.json');
const compiledDedication = require('../ethereum/build/Dedication.json');

let accounts;
let factory;
let dedicationAddress;
let dedication;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.newDedication("test", "to a great test").send({
    from: accounts[0],
    gas: '1000000'
  });

  [dedicationAddress] = await factory.methods.getDeployedDedications().call();
  dedication = await new web3.eth.Contract(
    JSON.parse(compiledDedication.interface),
    dedicationAddress
  );
});

describe('Dedications on ganache', () => {
  it('deploys a factory and a dedication', () => {
    assert.ok(factory.options.address);
    assert.ok(dedication.options.address);
  });

  it('initalizes a dedication', async () => {
    const content = await dedication.methods.getDedication().call();
    assert.equal(content[0], "test");
    assert.equal(content[1], "to a great test");
  });

  it('returns dedications based on an address', async () => {
    await factory.methods.newDedication("test2", "to a great test2").send({
      from: accounts[0],
      gas: '1000000'
    });

    await factory.methods.newDedication("test3", "to a great test3").send({
      from: accounts[1],
      gas: '1000000'
    });

    const account0Dedications = await factory.methods.getDedicationsByAddress(accounts[0]).call();
    const account1Dedications = await factory.methods.getDedicationsByAddress(accounts[1]).call();

    assert.equal(account0Dedications.length, 2);
    assert.equal(account1Dedications.length, 1);
  });
});