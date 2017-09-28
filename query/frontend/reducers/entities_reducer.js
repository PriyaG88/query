import { combineReducers } from 'redux';
import QuestionsReducer from './questions_reducer';
import AnswersReducer from './answers_reducer';
import CommentsReducer from './comments_reducer';

const EntitiesReducer =  combineReducers({
  questions: QuestionsReducer,
  answers: AnswersReducer,
  comments: CommentsReducer
});

export default EntitiesReducer;
