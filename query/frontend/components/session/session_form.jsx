import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form">
          <h1 className='main-logo'>Query</h1>
          <h5 className='tagline'>A place to find an answer for those burning questions</h5>
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>
          <br/>
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>
          <br/>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
