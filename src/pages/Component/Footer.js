import React, { Component } from 'react';
import {
  Link 
} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle}> 
        <div>
          <div className="container">
            <p> Copyright 2019 QueUp. All rights reserved. </p>
          </div>
        </div>



      </footer>
    );
  }
}

const footerStyle = {
  fontSize: '18px',
  backgroundColor: 'black',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  margin: '20px 0 0 0',
  position: 'absolute',
  height: '5%',
  width: '100%',
  bottom: '0'
}

export default Footer;