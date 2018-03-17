import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const user = { email: 'demo@example.com', password: 'password'};
    this.props.login(user);
  }


  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  displayErrors() {
    if (this.props.formType === this.props.errors.type) {
      return(
        <ul className="signup-errors">
          {this.props.errors.errors.map((error, i) => (
            <div>{error}</div>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="login-form-box">
        <h6 className="login-header">Log In</h6>
        <form onSubmit={this.handleSubmit}>
          <input
             className="login-input-field"
             type="text"
             value={this.state.email}
             placeholder="Email"
             onChange={this.update('email')}/>
          <input
             className="login-input-field"
             type="password"
             value={this.state.password}
             placeholder="Password"
             onChange={this.update('password')} />
           <input className="login-button" type="submit" value="Log In" />
           <input
             onClick={this.handleDemoLogin}
             className="login-button demo-button" type="submit" value="Demo" />
           <div>
             {this.displayErrors()}
           </div>
         </form>
     </div>
    );
  }
}

export default LoginForm;
