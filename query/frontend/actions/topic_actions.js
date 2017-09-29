import * as TopicAPIUtil from '../util/topic_api_util';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

export const fetchTopics = () => dispatch => (
  TopicAPIUtil.fetchTopics().then(topics => dispatch(receiveTopics(topics)))
);

export const createTopic = topic => dispatch => (
  TopicAPIUtil.createTopic(topic).then(topic => dispatch(receiveTopic(topic)))
);

const receiveTopics = topics => ({
  type: RECEIVE_TOPICS,
  topics
});

const receiveTopic = topic => ({
  type: RECEIVE_TOPIC,
  topic
});
