import React, { Component } from "react";
import "./style.css";
import Pic from "../../assets/images/login.png";


class Login extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // Next to handle special characters at the moment
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
            <img src={Pic} alt="loginImage" />;
          </div>

          <div className= "containerForm">
            <h1>Log in</h1>
            <form className="form">
              <div className="allInputs">
                <input className= "emailInput"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="E-mail Address"
                />
                <br></br>
                <input className= "passwordInput"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Password"
                />
              </div>
              <button className= "btn btn-primary" onClick={this.handleFormSubmit}>Log in </button>
            </form>
          </div>

          <div>
            <h1 className= "quote">" It is not possible to be in favor of justice for some people and not be in favor of justice for all people." - Martin Luther King, Jr.</h1>
          </div>

          <div>
            Testing email: {this.state.email}
            <br></br>
            Testing password: {this.state.password}
          </div>

        </div>
        );
      }
    }

export default Login;
