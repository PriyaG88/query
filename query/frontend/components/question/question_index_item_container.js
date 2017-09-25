import { connect } from 'react-redux';
import QuestionIndexItem from './question_index_item';
import { updateQuestion, deleteQuestion } from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateQuestion: question => dispatch(updateQuestion(question)),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  createAnswer: answer => dispatch(createAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndexItem);
