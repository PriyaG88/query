import React, { Component } from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';

class TopicIndex extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    return (
      <div className="feeds-container">
        <div className="feeds-title">
          <h4>Feeds</h4>
        </div>
        <div className="feed-list">
          <ul className="topic-index-container">
          { this.props.topics.map(topic => (
            <Link key={topic.id} to={`topics/${topic.id}`}>
              <div>
                {topic.name}
              </div>
            </Link>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default TopicIndex;
