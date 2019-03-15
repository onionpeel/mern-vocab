import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Dictionary from './components/Dictionary';
import AddVocabulary from './components/AddVocabulary';
import VocabList from './components/VocabList';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
// import SelectRoute from './components/SelectRoute';
import SelectNavbar from './components/SelectNavbar';
import CustomNavbar from './components/CustomNavbar';
import DashboardNavbar from './components/DashboardNavbar';

class App extends Component {
  isLoggedIn = (user) => {
    const registeredUser = this.props.username;
    console.log("isLoggedIn", registeredUser);
    // if (user) {
    //   return <DashboardNavbar />
    // } else {
    //   return <Navbar />
    // }
  };

  componentWillMount() {
    const regUser = this.props.registeredUsername;
    console.log("willMount", regUser);
    this.isLoggedIn(this.props.registeredUsername)
  }
  render() {
    return (
      <Router>
        <div>
          <SelectNavbar />

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/news" component={News}/>
          <Route path="/dictionary" component={Dictionary}/>
          <Route path="/addvocabulary" component={AddVocabulary}/>
          <Route path="/vocablist" component={VocabList}/>
          <Route path="/registration" component={Registration} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

const mapPropsToComponent = state => {
  return {
    registeredUsername: state.registeredUsername.username
  }
};

export default connect(mapPropsToComponent)(App);
