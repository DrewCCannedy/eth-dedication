import React, { Component } from 'react';
//custome components
import Layout from '../components/Layout';
import DedicationList from '../components/DedicationList';
//ethereum
import factory from '../ethereum/factory';
import Dedication from '../ethereum/dedication';

class DedicationIndex extends Component {
  static async getInitialProps() {
    // a list of deployed dedication addresses
    const dedications = await factory.methods.getDeployedDedications().call();
    if (dedications === undefined) throw TypeError;
    // gets the dedicatedTo and content attributes of the dedication
    const test = Dedication(dedications[0]).methods.content().call();
    const dedicationDetails = dedications.map(async (address) => {
      const instance = await Dedication(address);
      //get the content and dedicated to properties together
      // const [ dedicatedTo, content ] = await instance.methods.getDedication().call();
      const dedicatedTo = await instance.methods.dedicatedTo().call();
      const content = await instance.methods.content().call();
      if (dedicatedTo === undefined || content === undefined) throw TypeError;
      return {
        dedicatedTo,
        content
      };
    });

    return { dedicationDetails,test };
  }

  render() {
    return (
      <Layout>
        <h1>Dedication</h1>
        <DedicationList dedicationDetails={this.props.dedicationDetails} />
        {this.props.test[0]};
        {this.props.dedicationDetails[0].content}
      </Layout>
    );
  }
};

export default DedicationIndex;