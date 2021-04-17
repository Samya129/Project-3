import React, { Component } from "react";
import "./style.css";
import Pic from "../../assets/images/signup.png";

class Signup extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    email: "",
    password: "",
    confirmationPassword: "",
    termsAndConditions: false
  };

  handleInputChange = event => {

    if (this.state.username !== "" 
      && this.state.email !== "" 
      && this.state.password !== "" 
      && this.state.confirmationPassword !== "" 
      && this.state.termsAndConditions === true) {
      //change the button to enabled.
      //if user built scuccesfuly on back end (stateus code or however you want to handle it)
      //direct user to community page
    }
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // function that runs and checks to see if all feilds have inputs
    // then an if else ALL true then change disable 

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
          <img src={Pic} alt="signupImage" className="img-fluid "/>
        </div>

        <div className="form col-md-6 offset-md-3">

          <div className="title">Sign Up 
          </div>

          <div className= "container2">
            <form>
              <input
                value={this.state.username}
                name="fullName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Full name:"
              />
              <br></br>
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
              <input
                value={this.state.confirmationPassword}
                name="confirmationPassword"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Confirm Password:"
              />
                <input
                  type="radio" 
                  id="legal" 
                  name="consent" 
                  onChange={this.handleInputChange}
                  value={this.state.termsAndConditions}
                /> I agree to the terms and conditions.
            </form>
          </div>

          <br></br>
          <button disabled={this.state.username !== "" 
      && this.state.email !== "" 
      && this.state.password !== "" 
      && this.state.confirmationPassword !== "" 
      && this.state.termsAndConditions === true} type="button" className="btn btn-light btn-block" onClick={this.handleFormSubmit}>Sign Up</button>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div 
          style={{ borderTop: "5px solid #121e42 "}}>
        </div>

        <br></br>

        <div>
          <h2 className= "quote">"If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.” -Martin Luther King Jr.</h2>
        </div>

        <br></br>

        <div 
          style={{ borderTop: "5px solid #121e42 "}}>
        </div>

        <br></br>

        <div>
          Testing full name: {this.state.fullName}
          <br></br>
          Testing email: {this.state.email}
          <br></br>
          Testing password: {this.state.password}
          <br></br>
          Testing confirmation password: {this.state.confirmationPassword}
        </div>

      </div>
    );
  }
}

export default Signup;
