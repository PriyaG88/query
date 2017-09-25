import { combineReducers } from 'redux';
import QuestionsReducer from './questions_reducer';
import AnswersReducer from './answers_reducer';

const EntitiesReducer =  combineReducers({
  questions: QuestionsReducer,
  answers: AnswersReducer
});

export default EntitiesReducer;
