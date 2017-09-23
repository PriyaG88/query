import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    return(
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-box">
        <form onSubmit={this.handleSubmit}>
          {this.displayErrors()}
          <h6 id="login-header">Log In</h6>
            <label>
              <input
                className="login-input-field"
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}/>
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

        </form>
      </div>
    );
  }
}

export default LoginForm;
