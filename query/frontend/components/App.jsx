import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/"></Link>
        <h1>Query</h1>
      <GreetingContainer />
    </header>
    <Route path="/login" component={SessionFormContainer}/>
    <Route path="/signup" component={SessionFormContainer}/>
  </div>
);

export default App;
