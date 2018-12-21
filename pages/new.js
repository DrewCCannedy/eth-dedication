import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
//custom components
import Layout from '../components/Layout';
//ethereum 
import web3 from '../ethereum/web3';
import factory from '../ethereum/factory';

class NewDedication extends Component {
  state = {
    dedicatedTo: '',
    content: '',
    loading: false,
    error: false,
    success: false,
  }

  onSubmit = async (event) => {
    //won't submit form automatically
    event.preventDefault();

    this.setState({ loading: true, error: false, success: false });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .newDedication(this.state.dedicatedTo, this.state.content)
        .send({
          from: accounts[0]
        });
    } catch (err) {
      this.setState({ error: true });
    }
    this.setState({ loading: false });
    this.setState({ success: true });
  };

  render() {
    return (
      <Layout>
        <Form error={this.state.error} success={this.state.success} onSubmit={this.onSubmit}>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Dedicated to</label>
              <Input
                onChange={event =>
                  this.setState({ dedicatedTo: event.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label>Message</label>
              <Input
                onChange={event =>
                  this.setState({ content: event.target.value })}
              />
            </Form.Field>
          </ Form.Group>
          <Message
            error
            header='Could not create new dedication'
            list={[
              'Make sure you are signed into MetaMask',
              'Need help? Check out the ABOUT page!',
            ]}
          />
          <Message
            success
            header='Succesfully created new Dedication'
            content='Check it out on the HOME or OWNED pages!'
          />
          <Button floated='right' loading={this.state.loading} primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
};

export default NewDedication;