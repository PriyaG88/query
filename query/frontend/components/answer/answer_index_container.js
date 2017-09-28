import { fetchAnswers, deleteAnswer } from '../../actions/answer_actions';
import { connect } from 'react-redux';
import AnswerIndex from './answer_index';

const mapStateToProps = (state, ownProps) => {
  const question = ownProps.question;
  const answers = Object.keys(state.entities.answers).map(id => state.entities.answers[id]);


  return {
    currentUser: state.session.currentUser,
    question,
    answers
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAnswers: () => dispatch(fetchAnswers()),
  deleteAnswer: (answer) => dispatch(deleteAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);
