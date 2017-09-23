import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash/merge';

const _nullErrors = [];

const ErrorsReducer = (state = _nullErrors, action) => {

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};

export default ErrorsReducer;
