import React from 'react';

const UserDropDown = props => {
  return (
    <div className="user-dropdown">
      <span onClick={props.logout}>Logout</span>
    </div>
  );
};

export default UserDropDown;
