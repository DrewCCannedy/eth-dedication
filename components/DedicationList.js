import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

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
    return (
      <div>
        {this.renderDedications()}
      </div>
    );
  }
}

export default DedicationList;