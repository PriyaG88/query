import React, { Component } from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignup: false
    };
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleSignup() {
    this.setState(prevState => {
      return { showSignup: !prevState.showSignup };
    });
  }

  render() {
    return (
      <div className='background-container'>
        <div className="session-form-container">
          <h1 className='main-logo'>Query</h1>
          <h5 className='tagline'>A place to find answers for those burning questions</h5>
          <div className="form-wrapper">
            <div className='signup-form-container'>
              <SignupFormContainer
                toggleSignup={this.toggleSignup}
                showSignup={this.state.showSignup}/>
            </div>
            <div className="login-form-container">
              <LoginFormContainer/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default SessionForm;
