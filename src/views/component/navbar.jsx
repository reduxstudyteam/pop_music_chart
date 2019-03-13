import React, { PureComponent } from "react";

import { Container } from "styled-container-component";
import { Navbar, NavbarLink } from "styled-navbar-component";
import { Nav } from "styled-nav-component";
export default class NavbarComponent extends PureComponent {
  render() {
    return (
      <Container fluid>
        <Navbar expandSm>
          <Nav>
            <NavbarLink brand href="/">
              Mudux
            </NavbarLink>
            <NavbarLink href="/artistchart">Artist Chart</NavbarLink>
            <NavbarLink href="/trackchart">Track Chart</NavbarLink>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}
