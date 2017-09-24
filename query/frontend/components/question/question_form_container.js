import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions';
import QuestionForm from './question_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  toggleModal: ownProps.toggleModal
});

const mapDispatchToProps = dispatch => ({
  createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
