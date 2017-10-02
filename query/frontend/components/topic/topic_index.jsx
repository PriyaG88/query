import React from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';

class TopicIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopics();
  }

  render(){
    return (
      <div className="feeds-container">
        <div className="feeds-title">
          <h4>Feeds</h4>
        </div>
        <div className="feed-list">
          <ul>
            { this.props.topics.map(topic => (
            <li>
              <Link to={`/topics/${topic.id}`}>{topic.name}</Link>
            </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default TopicIndex;
