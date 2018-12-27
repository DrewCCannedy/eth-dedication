import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import Router from 'next/router';
//custom components
import Layout from '../components/Layout';

class DedicationAbout extends Component {
  render() {
    return (
      <Layout>
        <h2>Dedication/Blockchain/Ethereum overview</h2>
        <p>This website uses the Ethereum network to save dedication's to people. To make a dedication to someone, a person sends cryptocurrency from their online digital wallet to pay for the processing power it takes to save a dedication to the Ethereum blockchain. This website specifically uses a test network, so no actual money is being used. To try this out for yourself, follow the steps below!</p>
        <h2>How to</h2>
        <List ordered>
          <List.Item>
            Get the MetaMask broswer extension <a href='https://metamask.io/'>here</a>
            <List.List>
              <List.Item>This is your digital wallet that will hold your digital currency</List.Item>
              <List.Item>When you're done, click the fox icon in the upper left of your browser</List.Item>
              <List.Item>Create an account, then find the button to save your address to your clipboard</List.Item>
              <List.Item>Your address is how you can send and receive cryptocurrency</List.Item>
            </List.List>
          </List.Item>
          <List.Item>
            Get some fake ether(digital currency) <a href='http://rinkeby-faucet.com/'>here</a>
            <List.List>
              <List.Item>Paste your address into the form and press submit</List.Item>
              <List.Item>In less than 30 seconds, you will receive ether into your account!</List.Item>
            </List.List>
          </List.Item>
          <List.Item>Go back to the homepage and create a new Dedication
            <List.List>
              <List.Item>Once you submit the form, a MetaMask popup will appear, then approve the transaction</List.Item>
              <List.Item>You have just sent fake ether to pay for the power used to write this dedication to the blockchain!</List.Item>
            </List.List>
          </List.Item>
        </List>
      </Layout>
    );
  }
};

export default DedicationAbout;