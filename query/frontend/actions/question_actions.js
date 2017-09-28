import * as QuestionAPIUtil from '../util/question_api_util';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export const fetchQuestions = () => dispatch => (
  QuestionAPIUtil.fetchQuestions().then(questions => dispatch(receiveQuestions(questions)))
);

export const fetchQuestion = id => dispatch => (
  QuestionAPIUtil.fetchQuestion(id).then(question => dispatch(receiveQuestion(question)))
);

export const createQuestion = question => dispatch => (
  QuestionAPIUtil.createQuestion(question).then(question =>
  dispatch(receiveQuestion(question)))
);

export const updateQuestion = question => dispatch => (
  QuestionAPIUtil.updateQuestion(question).then(question =>
  dispatch(receiveQuestion(question)))
);

export const deleteQuestion = question => dispatch => (
  QuestionAPIUtil.deleteQuestion(question).then(question =>
  dispatch(removeQuestion(question)))
);

const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
});
