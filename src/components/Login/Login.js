import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuthFailed: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isAuthorized } = this.props;
    const { isAuthFailed } = this.state;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <div>
          <input onChange={this.handleChange} name="email" />
          <input onChange={this.handleChange} name="password" />
          {isAuthFailed ? <p className="error">Неверный пароль и/или почта.</p> : null}
        </div>
        <div>
          <button onClick={this.handleLogin}>Submit</button>
        </div>
      </div>
    );
  }
  handleLogin = () => {
    const { email, password } = this.state;
    const verifyLogin = this.props.authorizeUser(email, password);
    this.setState({ isAuthFailed: !verifyLogin });
  };
  
}

export default AuthHOC(Login);
