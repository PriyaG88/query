import TopicView from './topic_view';
import { connect } from 'react-redux';
import { questions, topics, answers } from '../../reducers/selectors';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchTopics } from '../../actions/topic_actions';
import { fetchAnswers, createAnswer } from '../../actions/answer_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  questions: questions(state),
  topics: topics(state),
  answers: answers(state),
  topicId: parseInt(ownProps.match.params.id),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchTopics: () => dispatch(fetchTopics()),
  fetchAnswers: () => dispatch(fetchAnswers()),
  createAnswer: answer => dispatch(createAnswer(answer))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicView));
