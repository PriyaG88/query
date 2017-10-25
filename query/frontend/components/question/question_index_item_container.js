import { connect } from 'react-redux';
import QuestionIndexItem from './question_index_item';
import { updateQuestion, deleteQuestion } from '../../actions/question_actions';
import { createAnswer, fetchAnswers } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  question: ownProps.question
});

const mapDispatchToProps = dispatch => ({
  updateQuestion: question => dispatch(updateQuestion(question)),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  createAnswer: answer => dispatch(createAnswer(answer)),
  fetchAnswers: () => dispatch(fetchAnswers())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndexItem);
