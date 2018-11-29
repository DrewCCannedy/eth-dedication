import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class DedicationList extends Component {
  renderDedications() {
    // maps the dedicationDetails into semantic-ui cards
    const items = this.props.dedicationDetails.map(instance => {
      return {
        header: instance.dedicatedTo,
        description: instance.content,
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div>
        {this.renderDedications()}
      </div>
    );
  }
}

export default DedicationList;