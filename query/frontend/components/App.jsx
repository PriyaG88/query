import React from 'react';
import { Switch } from 'react-router-dom';
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
    <Switch>
      <ProtectedRoute path="/topics/:topicId" component={TopicViewContainer} />
      <ProtectedRoute path="/questions/:questionId" component={QuestionViewContainer} />
      <ProtectedRoute path="/answer" component={QuestionsToAnswerContainer} />
      <ProtectedRoute exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
