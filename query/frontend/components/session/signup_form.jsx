import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const fullName = `${this.state.firstName} ${this.state.lastName}`;
    const user = {
      name: fullName,
      email: this.state.email,
      password: this.state.password
    };
    this.props.signup(user);
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

    if (this.props.showSignup) {
      return (
        <div className="signup-form-box">
          <h6 className="signup-header">Sign Up</h6>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label className="form-label">First Name
                <input
                  className="signup-input-field"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.update('firstName')} />
              </label>
            </div>
            <div>
              <label className="form-label">Last Name
                <input
                  className="signup-input-field"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.update('lastName')} />
              </label>
            </div>
            <div className="input-full-width">
              <label className="form-label">Email
                <input
                  className="signup-input-field full-width"
                  type="email"
                  value={this.state.email}
                  onChange={this.update('email')}/>
              </label>
            </div>
            <div className="input-full-width">
              <label className="form-label">Password
                <input
                  className="signup-input-field full-width"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')} />
              </label>
            </div>
            <p className="signup-prompt">By clicking "Sign Up" you indicate that you have read and agree to the Terms of Service and Privacy Policy.</p>
            <div className="form-actions">
              <a className="signup-cancel" onClick={this.props.toggleSignup}>Cancel</a>
              <input className="signup-button" type="submit" value="Sign Up" />
            </div>
          </form>
          {this.displayErrors()}
        </div>
      );
    }
    return (
      <div className="signup-prompt">
        <p>
          <a className="open-signup" onClick={this.props.toggleSignup}>Continue With Email</a>.
            By signing up you indicate that you have read and agree to the
            Terms of Service and Privacy Policy.
        </p>
      </div>
    );
  }
}

export default SignupForm;
