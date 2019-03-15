import React, {Component} from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './CustomNavbar.css';

import Login from './../modals/Login';


class DashboardNavbar extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      modalShow: false
    };
  }

//This needs to be refactored so that the redirect only happens if the
//logout is successful.  Right now, the user will be redirected to the
//home page regardless of whether the user has been logged on the server.
  renderRedirect = async () => {
    if (this.state.redirect) {
      console.log('pre-logout')
      await axios.get('/api/user/logout');
      console.log('post-logout')
      // return <Redirect to="/" />
    }
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
                <Nav.Link onSelect={this.renderRedirect} href="/">Logout</Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
  }
}

export default DashboardNavbar;
