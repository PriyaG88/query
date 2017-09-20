import React from 'react';
import { Link } from 'react-router-dom';


const sessionLinks = () => {
  return (
    <div>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  );
};

const personalGreeting = (currentUser, logout) => {
  return (
    <div>
      <h3>Hi, {currentUser.username}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const Greeting = ({ currentUser, logout }) => {
  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
