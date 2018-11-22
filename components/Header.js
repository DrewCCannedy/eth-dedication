import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Link from 'next/link';

class Header extends Component {
  render() {
    return (
      <Container style={{ "marginTop": "20px" }}>
        <Menu inverted fluid widths={3}>
          <Menu.Item link>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item link>
            <Link href='/search'>
              <a>Owned</a>
            </Link>
          </Menu.Item>
          <Menu.Item link>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}

export default Header;