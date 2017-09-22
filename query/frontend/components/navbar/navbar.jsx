import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    return (
      <div>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default NavBar;
