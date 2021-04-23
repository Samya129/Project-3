import React, { Component } from "react";
import "./style.css";
import Pic from "../../assets/images/login.png";
import { Redirect } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          history.push("/YourCommunity");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

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
