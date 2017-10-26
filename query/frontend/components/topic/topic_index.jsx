import React from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';

class TopicIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopics();
    console.log(this.props);
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
            <Link to={`topics/${topic.id}`}>
              <div key={topic.id}>
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
