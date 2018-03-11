import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TopicIndex extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopics();
  }

  renderTopics() {
    return this.props.topics.map(topic => (
      <li key={topic.id} className="topic-list-item">
        <NavLink  to={`/topics/${topic.id}`}>{topic.name}</NavLink>
      </li>
    ));
  }

  render() {
    return (
      <div className="feeds-container">
        <h4 className="feeds-title">Feeds</h4>
        <div className="feed-list">
          <ul className="topics-list">
            {this.renderTopics()}
          </ul>
        </div>
      </div>
    );
  }
}
export default TopicIndex;
