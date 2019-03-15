import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import DashboardNavbar from './DashboardNavbar';

class SelectNavbar extends Component {
  userLoggedIn = user => {
    return (user ? (DashboardNavbar) : (CustomNavbar));
  };



  render() {

    const tempName = this.props.registeredUsername;
    console.log("tempName", tempName)
    // const selectedNavbar = this.userLoggedIn(this.props.registeredUsername);
    return (
      <DashboardNavbar />
    )
  }
}

// export default SelectNavbar;
const mapPropsToComponent = state => {
  return {
    registeredUsername: state.registeredUsername.username
  }
};

export default connect(mapPropsToComponent)(SelectNavbar);
