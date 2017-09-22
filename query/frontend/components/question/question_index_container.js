import { fetchQuestions } from '../../actions/question_actions';
import { connect } from 'react-redux';
import QuestionIndex from './question_index';

const mapStateToProps = state => ({
  questions: Object.values(state.questions)
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
