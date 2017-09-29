import { RECEIVE_TOPICS, RECEIVE_TOPIC } from '../actions/topic_actions';
import merge from 'lodash/merge';

const TopicsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TOPICS:
      return merge({}, action.topics);
    case RECEIVE_TOPIC:
      return merge({}, state, {[action.topic.id]: action.topic});
    default:
      return state;
  }
};

export default TopicsReducer;
