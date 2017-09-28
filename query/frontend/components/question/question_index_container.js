import { fetchQuestions, updateQuestion, deleteQuestion } from '../../actions/question_actions';
import { fetchAnswers, createAnswer } from '../../actions/answer_actions';
import { answers, questions } from '../../reducers/selectors';
import { connect } from 'react-redux';
import QuestionIndex from './question_index';


const mapStateToProps = state => ({
  questions: questions(state),
  answers: answers(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchAnswers: () => dispatch(fetchAnswers()),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  deleteQuestion: (question) => dispatch(deleteQuestion(question)),
  createAnswer: answer => dispatch(createAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
