import { fetchAnswers, deleteAnswer } from '../../actions/answer_actions';
import { fetchUser } from '../../actions/user_actions';
import { answers } from '../../reducers/selectors';
import { connect } from 'react-redux';
import AnswerIndex from './answer_index';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  question: ownProps.question,
  answers: answers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAnswers: () => dispatch(fetchAnswers()),
  deleteAnswer: answer => dispatch(deleteAnswer(answer)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);
