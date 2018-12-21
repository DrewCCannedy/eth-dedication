import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import Router from 'next/router';
//custom components
import Layout from '../components/Layout';
import DedicationList from '../components/DedicationList';
//ethereum
import factory from '../ethereum/factory';
import Dedication from '../ethereum/dedication';
import web3 from '../ethereum/web3';

class DedicationIndex extends Component {
  static async getInitialProps() {
    // a list of deployed dedication addresses based on a lookup address
    const accounts = await web3.eth.getAccounts();
    let dedications;
    try {
      dedications = await factory.methods.getDedicationsByAddress(accounts[0]).call();
    } catch (err) {
      dedications = [];
    }
    // gets the dedicatedTo, address, and content attributes of each dedication
    let dedicationDetails = [];
    for (let i = 0; i < dedications.length; i++) {
      const address = dedications[i];
      const instance = Dedication(address);
      const dedication = await instance.methods.getDedication().call();
      const dedicatedTo = dedication[0];
      const content = dedication[1];
      dedicationDetails.push({ address, dedicatedTo, content });
    }
    return { dedicationDetails };
  }

  render() {
    return (
      <Layout>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Button content='new dedication' floated="right" primary onClick={() => Router.push('/new')} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <DedicationList dedicationDetails={this.props.dedicationDetails} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
};

export default DedicationIndex;