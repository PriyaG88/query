import { RECEIVE_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from '../actions/question_actions';
import merge from 'lodash/merge';

const QuestionsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return merge({}, action.questions);
    case RECEIVE_QUESTION:
      return merge({}, state, {[action.question.id]: action.question});
    case REMOVE_QUESTION:
      let newState = merge({}, state);
      delete newState[action.question.id];
      return newState;
    default:
      return state;
  }
};

export default QuestionsReducer;
