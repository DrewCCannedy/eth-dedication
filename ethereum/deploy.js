const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/DedicationFactory.json');

const provider = new HDWalletProvider(
  'turkey off critic one wire rhythm top across author trip unique gate',
  'https://rinkeby.infura.io/v3/865276da8d6f4dfab43f7c45916aa7dc'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();

// 0xBDd89A61187c5228e6172e502a997e9238216D8D