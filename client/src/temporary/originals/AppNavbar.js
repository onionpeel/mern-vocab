import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';


class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#D7ADE8'}} light expand="md" className="mb-4">
          <NavbarBrand href="/" style={{color: "#181B17"}}>That Japanese vocabulary list you've always longed for</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/vocabulary/">Review your vocabulary</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/onionpeel/mern-vocab">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default AppNavbar;
