import React, { Component } from 'react';
import { Card, Message } from 'semantic-ui-react';

class DedicationList extends Component {
  renderDedications() {
    // maps the dedicationDetails into semantic-ui cards
    const items = this.props.dedicationDetails.map(instance => {
      return {
        header: instance.dedicatedTo,
        meta: instance.address,
        description: instance.content,
        color: "blue",
        style: { overflowWrap: 'break-word' }
      };
    });
    return <Card.Group items={items} centered itemsPerRow={4} />;
  }

  render() {
    if (this.props.dedicationDetails.length > 0) {
      return (
        <div>
          {this.renderDedications()}
        </div>
      );
    } else {
      return (
        <div>
          <Message
            error
            header='Cannot find owned dedications'
            list={[
              'Make sure you have created a dedication and are signed into MetaMask',
              'Need help? Check out the ABOUT page!',
            ]}
          />
        </div>
      )
    }
  }
}

export default DedicationList;