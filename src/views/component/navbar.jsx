import React, { Component } from "react";

import { Container } from "styled-container-component";
import { Navbar, NavbarLink } from "styled-navbar-component";
import { Nav } from "styled-nav-component";

export default class NavbarComponent extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Navbar expandSm dark>
          <Nav start>
            <NavbarLink dark brand href="#">
              Music Chart
            </NavbarLink>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}
