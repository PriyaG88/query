import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import QuestionViewContainer from './question/question_view_container';
import TopicViewContainer from './topic/topic_view_container';
import HomePage from './home_page';
import QuestionsToAnswerContainer from './question/questions_to_answer_container';

const App = () => (
  <div>
    <AuthRoute path="/enter" component={SessionFormContainer} />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <Switch>
      <Route path="/topics/:id" component={TopicViewContainer} />
      <Route path="/questions/:id" component={QuestionViewContainer} />
      <Route path="/answer" component={QuestionsToAnswerContainer} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
