import web3 from './web3';
import Dedication from './build/Dedication';

export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(Dedication.interface),
    address
  );
};