import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from './login_form';
import SignupForm from './signup_form';

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
      <div className="session-form-container">
        <h1 className='main-logo'>Query</h1>
        <h5 className='tagline'>A place to find an answer for those burning questions</h5>
        <div className="login-form-container">
          <LoginForm login={this.props.login}/>
        </div>
        <div className="signup-form-container">
          <SignupForm signup={this.props.signup}/>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
