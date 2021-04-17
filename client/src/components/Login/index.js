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
        <img src={Pic} alt="loginImage" className="img-fluid"/>
      </div>
      <div className= "form col-md-6 offset-md-3">
        <div className="title">Log in
        </div>
        <div className= "container2">
          <form>
            <input
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Email:"
              />
              <br></br>
              <input
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter Password:"
              />
          </form>
        </div>
        <br></br>
        <button type="submit" className="btn btn-light btn-block" onClick={this.handleFormSubmit}>Log in</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div 
        style={{ borderTop: "5px solid #121e42 "}}>
      </div>
      <br></br>
      <div>
        <h2 className= "quote">"It is not possible to be in favor of justice for some people and not be in favor of justice for all people." - Martin Luther King, Jr.</h2>
      </div>
      <br></br>
      <div 
        style={{ borderTop: "5px solid #121e42 "}}>
      </div>
      <br></br>
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
