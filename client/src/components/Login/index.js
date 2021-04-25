//NOT IN USE
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
    const { isLoggedIn, message } = this.props;
  
    if (isLoggedIn) {
      return <Redirect to="/YourCommunity" />;
    }

    return (
  
    <div className= "container">

      <div>
        <img src={Pic} alt="loginImage" className="img-fluid"/>
      </div>

      <div className= "form col-md-6 offset-md-3">
        
        <div className="title">Log in
        </div>

        <div className= "container2">
          <br></br>

          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <Input
              type="text"
              className="form-control"
              name="username"
              placeholder = "Enter username"
              value={this.state.username}
              onChange={this.onChangeUsername}
              validations={[required]}
            />
            <Input
              type="password"
              className="form-control"
              name="password"
              placeholder = "Enter password"
              value={this.state.password}
              onChange={this.onChangePassword}
              validations={[required]}
            />

            <div 
              style={{ borderTop: "15px solid #121e42 "}}>
            </div>

            <button
              className="btn btn-primary btn-block"
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>

            {message && (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            )}

            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
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
    </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}


//export default Login;
export default connect(mapStateToProps)(Login);
