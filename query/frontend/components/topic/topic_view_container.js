import TopicView from './topic_view';
import { connect } from 'react-redux';
import { questions, singleTopic, answers } from '../../reducers/selectors';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchTopic, fetchTopics } from '../../actions/topic_actions';
import { fetchAnswers, createAnswer } from '../../actions/answer_actions';


const mapStateToProps = (state, ownProps) => ({
  questions: questions(state),
  topic: singleTopic(state, ownProps.match.params.id),
  answers: answers(state),
  topicId: parseInt(ownProps.match.params.id),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchTopic: id => dispatch(fetchTopic(id)),
  fetchAnswers: () => dispatch(fetchAnswers()),
  createAnswer: answer => dispatch(createAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicView);
