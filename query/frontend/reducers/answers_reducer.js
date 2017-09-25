import { RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';
import merge from 'lodash/merge';

const AnswersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ANSWER:
      return merge({}, state, {[action.answer.id]: action.answer});
    case REMOVE_ANSWER:
      let newState = merge({}, state);
      delete newState[action.answer.id];
      return newState;
    default:
      return state;
  }
};

export default AnswersReducer;
