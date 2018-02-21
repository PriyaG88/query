import { connect } from 'react-redux';
import QuestionView from './question_view';
import { singleQuestion } from '../../reducers/selectors';
import { updateQuestion, fetchQuestion }
from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    questions: state.entities.questions,
    questionId: parseInt(ownProps.match.params.id)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  createAnswer: answer => dispatch(createAnswer(answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView);
