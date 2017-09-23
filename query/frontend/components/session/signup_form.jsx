import React from 'react';

class SignupForm extends React.Component {
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
    this.props.signup(user);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  displayErrors() {
    return(
      <ul className="signup-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-box">
        <form onSubmit={this.handleSubmit}>
          {this.displayErrors()}
          <h6 id="signup-header">Sign Up</h6>
          <label>
            <input
              className="signup-input-field"
              type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={this.update('username')}/>
          </label>
          <br/>
          <label>
            <input
              className="signup-input-field"
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.update('password')} />
          </label>
          <br/>
          <input id="signup-button" type="submit" value="Sign Up" />

        </form>
      </div>
    );
  }
}

export default SignupForm;
