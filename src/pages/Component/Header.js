import React, { Component } from 'react';
import {
  Link 
} from 'react-router-dom';
import Homepage from '../Home/Homepage';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="logo" style={logoStyle}>
          QueUp
        </div>

        <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li className="last">
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

const logoStyle = {
  fontSize: '40px',
  fontWeight: '500',
  padding: '10px 10px 15px 15px'
}

export default Header;