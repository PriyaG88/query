import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class TopicIndex extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchTopics();
  }

  renderTopics() {
    return this.props.topics.map(topic => (
      <Link to={`/topics/${topic.id}`}>{topic.name}</Link>
    ));
  }

  render() {
    return (
      <div className="feeds-container">
        <h4 className="feeds-title">Feeds</h4>
        <div className="feed-list">
          <ul className="topic-index-container">
            {this.renderTopics()}
          </ul>
        </div>
      </div>
    );
  }
}
export default TopicIndex;
