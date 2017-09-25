import { deleteAnswer } from '../../actions/answer_actions';
import { connect } from 'react-redux';
import AnswerIndex from './answer_index';

const mapStateToProps = state => ({
  answers: Object.keys(state.entities.answers).map(id => state.entities.answers[id])
});

const mapDispatchToProps = dispatch => ({
  deleteAnswer: (answer) => dispatch(deleteAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);
