import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import QuestionIndexContainer from './question/question_index_container';

const App = () => (
  <div>

      <ProtectedRoute exact path="/questions" component={QuestionIndexContainer} />
      <ProtectedRoute path="/" component={NavBarContainer} />
      <AuthRoute path="/" component={SessionFormContainer} />


  </div>
);

export default App;
