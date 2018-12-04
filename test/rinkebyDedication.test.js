const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledDedication = require('../ethereum/build/Dedication');

const assert = require('assert');

const provider = new HDWalletProvider(
  'turkey off critic one wire rhythm top across author trip unique gate',
  'https://rinkeby.infura.io/v3/865276da8d6f4dfab43f7c45916aa7dc'
);
const web3 = new Web3(provider);

let instance;

beforeEach(async () => {

  instance = new web3.eth.Contract(
    JSON.parse(compiledDedication.interface),
    "0xFd6E53E116Db779986855E6EF33699a65C55b6AC");
});

describe('Dedications on rinkeby', () => {
  it('reads a dedication through getters', async () => {
    const dedicatedTo = await instance.methods.dedicatedTo().call();
    const content = await instance.methods.content().call();
    assert.equal(dedicatedTo, "mother");
    assert.equal(content, "you rock my socks off");
  }).timeout(15000);

  it('reads a dedication through getDedication', async () => {
    const dedication = await instance.methods.getDedication().call();
    const dedicatedTo = dedication[0];
    const content = dedication[1];
    assert.equal(dedicatedTo, "mother");
    assert.equal(content, "you rock my socks off");
  }).timeout(15000);
});