import { connect } from 'react-redux';
import QuestionIndexItem from './question_inde_item';
import { updateQuestion, deleteQuestion } from '../../actions/question_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateQuestion: question => dispatch(updateQuestion(question)),
  deleteQuestion: id => dispatch(deleteQuestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndexItem);
