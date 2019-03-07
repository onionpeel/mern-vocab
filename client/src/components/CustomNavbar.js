import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button, Container, ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

import Login from './../modals/Login';


class CustomNavbar extends Component {
  constructor(...args) {
    super(...args);
    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
        <Navbar expand="lg" sticky="top">
          <Container>
            <Navbar.Brand>
              <Link to="/">The Sumo Diaper Rash</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/dictionary">Dictionary</Nav.Link>

                <ButtonToolbar>
                  <Button
                    variant="link"
                    style={{color: "white"}}
                    onClick={() => this.setState({ modalShow: true })}
                  >
                    Login
                  </Button>

                  <Login
                    show={this.state.modalShow}
                    onHide={modalClose}
                  />
                </ButtonToolbar>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
  }
}

export default CustomNavbar;
