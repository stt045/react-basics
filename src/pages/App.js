import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignIn from './SignIn/SignIn.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/queup/">
        <div class="topnav">
          <NavLink to="/signin" activeClassName="active">Sign In</NavLink>
          <NavLink to="/profile" activeClassName="active">Profile</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
        </div>

      
        <div>

        </div>
      </Router>

    );
  }
}

export default App;
