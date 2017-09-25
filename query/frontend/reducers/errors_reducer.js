import { RECEIVE_CURRENT_USER, RECEIVE_LOGIN_ERRORS, RECEIVE_SIGNUP_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash/merge';

const _nullErrors = {
  type: "",
  errors: []
};

const ErrorsReducer = (state = _nullErrors, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      newState = {
        type: "signup",
        errors: action.errors
      };
      return newState;
    case RECEIVE_LOGIN_ERRORS:
      newState = {
        type: "login",
        errors: action.errors
      };
      return newState;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};

export default ErrorsReducer;
