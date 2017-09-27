import * as AnswerAPIUtil from '../util/answer_api_util';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

export const createAnswer = answer => dispatch => (
  AnswerAPIUtil.createAnswer(answer).then(answer => dispatch(receiveAnswer(answer)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateAnswer = answer => dispatch => (
  AnswerAPIUtil.updateAnswer(answer).then(answer => dispatch(receiveAnswer(answer)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteAnswer = answer => dispatch => (
  AnswerAPIUtil.deleteAnswer(answer).then(answer => dispatch(removeAnswer(answer)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

const removeAnswer = answer => ({
  type: REMOVE_ANSWER,
  answer
});
