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

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup"></Link>;
    } else {
      return <Link to="/login"></Link>;
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

  renderErrors() {
    return (
      <ul>
        { this.props.errors.map(err => (
          <li>{err}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="session-form-class">
        Welcome to Query!
        {this.navLink()}
        {this.renderErrors()}
        <label>Username:
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
          >
          </input>
        </label>
        <label>Password:
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
          >
          </input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default withRouter(SessionForm);
