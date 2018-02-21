import { connect } from 'react-redux';
import {
  fetchQuestions,
  updateQuestion,
  deleteQuestion
  } from '../../actions/question_actions';
import { fetchAnswers, createAnswer } from '../../actions/answer_actions';
import { fetchComments } from '../../actions/comment_actions';
import { answers, questions, comments } from '../../reducers/selectors';
import QuestionIndex from './question_index';


const mapStateToProps = (state, ownProps) => ({
  questions: questions(state),
  answers: answers(state),
  comments: comments(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchAnswers: () => dispatch(fetchAnswers()),
  fetchComments: () => dispatch(fetchComments()),
  updateQuestion: question => dispatch(updateQuestion(question)),
  deleteQuestion: question => dispatch(deleteQuestion(question)),
  createAnswer: answer => dispatch(createAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
