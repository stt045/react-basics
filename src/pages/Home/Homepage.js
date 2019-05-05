import React, { Component } from 'react';
import GameList from '../Component/GameList';

class Homepage extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="slider" style={sliderStlye}>
          <div className="container">
            <table style={tableStyle}>
              <tr>
                <td className="logo">QueUp</td>
                <td className="info">
                  <h1> Welcome to Que Up !</h1>
                  <h4>Our goal is to bring together like minded gamers</h4>
                  <h2>Find gamers with similar talents and que up!</h2>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <h1>Homepage Content</h1>
        <p>Things to include</p>
        <ul>
          <li>LFC Button</li>
          <li>Small video (demonstration perhaps)</li>
          <li>website and service description</li>
          <li>an array of the most popular games with a search and filter feature</li>
        </ul>
      </div>
    );
  }
}

const sliderStlye = {
  background: 'gray',
  margin: '0',
  padding: '0',
  width: '100%',
  height: '35vh'
}

const tableStyle = {
  margin: '0 auto',
  padding: '0',

}


export default Homepage;