import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';


const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/" component={SessionFormContainer} />
    </Switch>
    <ProtectedRoute path="/" component={NavBarContainer} />

  </div>
);

export default App;
