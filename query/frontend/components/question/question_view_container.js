import { connect } from 'react-redux';
import QuestionView from './question_view';
import { updateQuestion, fetchQuestions, fetchQuestion, deleteQuestion }
from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  questions: state.entities.questions
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  createAnswer: answer => dispatch(createAnswer(answer)),
  deleteQuestion: question => dispatch(deleteQuestion(question)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionView));
