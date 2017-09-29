import * as AnswerAPIUtil from '../util/answer_api_util';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

export const fetchAnswers = () => dispatch => (
  AnswerAPIUtil.fetchAnswers().then(answers => dispatch(receiveAnswers(answers)))
);

export const createAnswer = answer => dispatch => (
  AnswerAPIUtil.createAnswer(answer).then(answer => dispatch(receiveAnswer(answer)))
);

export const updateAnswer = answer => dispatch => (
  AnswerAPIUtil.updateAnswer(answer).then(answer => dispatch(receiveAnswer(answer)))
);

export const deleteAnswer = answer => dispatch => (
  AnswerAPIUtil.deleteAnswer(answer).then(answer => dispatch(removeAnswer(answer)))
);

const receiveAnswers = answers => ({
  type: RECEIVE_ANSWERS,
  answers
});

const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

const removeAnswer = answer => ({
  type: REMOVE_ANSWER,
  answer
});
