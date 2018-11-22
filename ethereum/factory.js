import web3 from './web3';
import DedicationFactory from './build/DedicationFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(DedicationFactory.interface),
  '0x512641cd800175e8920c09676a32bf18335489FF'
);

export default instance;