import React, { Component } from "react";
import "./style.css";
import Pic from "../../assets/images/signup.png";

class Signup extends Component {
  // Setting the component's initial state
  state = {
    fullName: "",
    email: "",
    password: "",
    confirmationPassword: "",
    termsAndConditions: false
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
  
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
  };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
        <div className= "container">
          <div>
            <img src={Pic} alt="signupImage" />;
          </div>

          <form className="form">
            <input
              value={this.state.fullName}
              name="fullName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Full Name"
            />
            <br></br>
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              type="text"
              placeholder="E-mail Address"
            />
            <br></br>
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Password"
            />
            <br></br>
            <input
              value={this.state.confirmationPassword}
              name="confirmationPassword"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Confirm Password"
            />
            <div>
            <p>
              You are okay letting us sell your data
            </p>
            <input
              value="consent"
              onChange={this.handleInputChange}
              type="radio"
            />
            </div>

            <button onClick={this.handleFormSubmit}>Sign Up</button>

          </form>
          <div>
            <h1>Quote goes here</h1>
          </div>
        </div>
        );
    }
    }

export default Signup;
