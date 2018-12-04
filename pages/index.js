import React, { Component } from 'react';
//custom components
import Layout from '../components/Layout';
import DedicationList from '../components/DedicationList';
//ethereum
import factory from '../ethereum/factory';
import Dedication from '../ethereum/dedication';

class DedicationIndex extends Component {
  static async getInitialProps() {
    // a list of deployed dedication addresses
    const dedications = await factory.methods.getDeployedDedications().call();

    // gets the dedicatedTo and content attributes of the dedication
    let dedicationDetails = [];
    for (let i = 0; i < dedications.length; i++) {
      const address = dedications[i];
      const instance = Dedication(address);
      const dedication = await instance.methods.getDedication().call();
      const dedicatedTo = dedication[0];
      const content = dedication[1];
      dedicationDetails.push({ address, dedicatedTo, content });
    }
    return { dedicationDetails, address: dedications.length };
  }

  render() {
    return (
      <Layout>
        <h1>Ethereum-Dedications</h1>
        <DedicationList dedicationDetails={this.props.dedicationDetails} />
      </Layout>
    );
  }
};

export default DedicationIndex;