import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/*import './SignIn.css';*/

class SignUp extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    // Event handlers 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * 
   * @param {*} e 
   */
  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  /**
   * 
   * @param {*} e 
   */
  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
        return (
          <div className="wrapper">
          
            <img src="https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            

            <div className="FormCenter">
              <form  onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                <h4>We are <span>QUEUP</span></h4>
                <p>This is the sign up page</p>

                <div className="FormField">
                  <label className="FormFieldLabel" htmlFor="email">E-mail Address</label>
                  <input type="email" id="email" className="FormFieldInput" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormFieldLabel" htmlFor="password">Password</label>
                  <input type="password" id="password" className="FormFieldInput" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>

                 { /* Add another re-enter password field */ }

                 <div className="FormField">
                  <label className="FormFieldLabel" htmlFor="password">Password</label>
                  <input type="password" id="passwordR" className="FormFieldInput" placeholder="Re-enter your password" name="passwordR"/>
                </div>

                <div className="SubmitField">
                  <button className="FormFieldButton">Sign Up</button> <Link to="/signin" className="FormFieldLink">Already have an account? Sign In</Link>
                </div>
              </form>
            </div>
           </div> 
        );
  }
}

export default SignUp;