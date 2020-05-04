import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "deepaksuthar@gmail.com",
      password: "12341234",
      inputEmail: "",
      inputPassword: "",
    };
    this.handleEventEmail = this.handleEventEmail.bind(this);
    this.handleEventPassword = this.handleEventPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleEventEmail(e) {
    e.preventDefault();
    this.setState({
      inputEmail: e.target.value,
    });
  }
  handleEventPassword(e) {
    e.preventDefault();
    this.setState({
      inputPassword: e.target.value,
    });
  }
  handleLogin() {
    if (
      this.state.email === this.state.inputEmail &&
      this.state.password === this.state.inputPassword
    ) {
      alert("Login Successfull");
      this.setState({
        inputEmail: "",
        inputPassword: "",
      });
    } else {
      alert("Wrong Email or Password");
      this.setState({
        inputEmail: "",
        inputPassword: "",
      });
    }
  }
  render() {
    return (
      <div className="main-container">
        <div className="form-group">
          <label className="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.handleEventEmail}
          />
        </div>
        <div className="form-group">
          <label className="exampleInputEmail1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={this.state.inputPassword}
            onChange={this.handleEventPassword}
          />
        </div>
        <button className="btn btn-primary" onClick={this.handleLogin}>
          Submit
        </button>
      </div>
    );
  }
}

export default App;
