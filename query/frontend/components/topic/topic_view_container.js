import TopicView from './topic_view';
import { connect } from 'react-redux';
import { questions, topics, answers } from '../../reducers/selectors';
import { fetchQuestions } from '../../actions/question_actions';
import { fetchTopics } from '../../actions/topic_actions';
import { fetchAnswers } from '../../actions/answer_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  questions: questions(state),
  topics: topics(state),
  answers: answers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchTopics: () => dispatch(fetchTopics()),
  fetchAnswers: () => dispatch(fetchAnswers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicView));