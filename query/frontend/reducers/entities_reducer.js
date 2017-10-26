import { combineReducers } from 'redux';
import QuestionsReducer from './questions_reducer';
import AnswersReducer from './answers_reducer';
import CommentsReducer from './comments_reducer';
import TopicsReducer from './topics_reducer';
import UsersReducer from './users_reducer';

const EntitiesReducer =  combineReducers({
  questions: QuestionsReducer,
  answers: AnswersReducer,
  comments: CommentsReducer,
  users: UsersReducer,
  topics: TopicsReducer
});

export default EntitiesReducer;
