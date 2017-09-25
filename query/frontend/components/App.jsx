import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionViewContainer from './question/question_view_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/questions/:questionId" component={QuestionViewContainer} />
      <ProtectedRoute path="/" component={QuestionIndexContainer} />
    </Switch>
    <AuthRoute path="/" component={SessionFormContainer} />
  </div>
);

export default withRouter(App);
