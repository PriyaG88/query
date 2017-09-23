import { combineReducers } from 'redux';
import QuestionsReducer from './questions_reducer';

const EntitiesReducer =  combineReducers({
  questions: QuestionsReducer
});

export default EntitiesReducer;
