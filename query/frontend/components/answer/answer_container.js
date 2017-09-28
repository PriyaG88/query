import { connect } from 'react-redux';
import Answer from './answer';
import { fetchAnswers } from '../../actions/answer_actions';
import { answers } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  question: ownProps.question,
  answers: answers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAnswers: () => dispatch(fetchAnswers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
