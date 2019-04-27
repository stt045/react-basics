import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './HeaderComponent/Header';
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp.js';
import Homepage from './Home/Homepage';
import Profile from './Profile/Profile';
import About from './About/About';
import logo from './logo.svg';
import './App.css';

// Bridge between react world and the normal client side of the browser
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
