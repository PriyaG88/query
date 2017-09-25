import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="background-container">
        <div className="session-form-container">
          <h1 className='main-logo'>Query</h1>
          <h5 className='tagline'>A place to find answers for those burning questions</h5>
          <div className="login-form-container">
            <LoginFormContainer/>
          </div>
          <div className="signup-form-container">
            <SignupFormContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
