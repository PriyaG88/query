import { connect } from 'react-redux';
import { fetchTopics } from '../../actions/topic_actions';
import { topics } from '../../reducers/selectors';
import TopicIndex from './topic_index';

const mapStateToProps = state => ({
  topics: topics(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTopics: () => dispatch(fetchTopics())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicIndex);
