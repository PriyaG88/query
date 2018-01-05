import { connect } from 'react-redux';
import QuestionView from './question_view';
import { singleQuestion } from '../../reducers/selectors';
import { updateQuestion, fetchQuestions, fetchQuestion, deleteQuestion }
from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    currentUser: state.session.currentUser,
    question: singleQuestion(state, ownProps.match.params.id),
    questionId: ownProps.match.params.id
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  createAnswer: answer => dispatch(createAnswer(answer)),
  deleteQuestion: question => dispatch(deleteQuestion(question)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionView));
