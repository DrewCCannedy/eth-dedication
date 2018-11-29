import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Router from 'next/router';

class Header extends Component {
  render() {
    return (
      <Menu inverted fluid widths={3}>
        <Menu.Item link onClick={() => Router.push('/')} name="home" />
        <Menu.Item link onClick={() => Router.push('/search')} name="owned" />
        <Menu.Item link onClick={() => Router.push('/about')} name="about" />
      </Menu>
    )
  }
}

export default Header;