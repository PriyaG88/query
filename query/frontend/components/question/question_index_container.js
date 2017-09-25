import { fetchQuestions, updateQuestion, deleteQuestion } from '../../actions/question_actions';
import { connect } from 'react-redux';
import QuestionIndex from './question_index';

const mapStateToProps = state => ({
  questions: Object.keys(state.entities.questions).map(id => state.entities.questions[id])
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  updateQuestion: (question) => dispatch(updateQuestion(question)),
  deleteQuestion: (question) => dispatch(deleteQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
