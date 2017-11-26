import { connect } from 'react-redux';
import { answers, questions } from '../../reducers/selectors';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchAnswers, createAnswer } from '../../actions/answer_actions';
import QuestionsToAnswer from './questions_to_answer';

const mapStateToProps = state => ({
  questions: questions(state),
  answers: answers(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchAnswers: () => dispatch(fetchAnswers()),
  createAnswer: answer => dispatch(createAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsToAnswer);
