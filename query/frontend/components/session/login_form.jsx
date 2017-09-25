import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
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
        <form onSubmit={this.handleSubmit}>
          <h6 id="login-header">Log In</h6>
            <label>
              <input
                className="login-input-field"
                type="text"
                value={this.state.email}
                placeholder="Email"
                onChange={this.update('email')}/>
            </label>
            <br/>
            <label>
              <input
                className="login-input-field"
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')} />
            </label>
            <br/>
            <input id="login-button" type="submit" value="Log In" />
            {this.displayErrors()}
        </form>
      </div>
    );
  }
}

export default LoginForm;
