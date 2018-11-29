import web3 from './web3';
import DedicationFactory from './build/DedicationFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(DedicationFactory.interface),
  '0x9061B9086AE18C653882C88f3183a5A28691D3C7'
);

export default instance;