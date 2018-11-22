import Web3 from 'web3';

let web3;

// if in the browser and metamask is running
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/865276da8d6f4dfab43f7c45916aa7dc',
  );
  web3 = new Web3(provider);
}

export default web3;