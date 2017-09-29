import React from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';

class TopicIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopics();
    console.log(this.props.topics);
  }

  render(){
    return (
      <div className="feeds-container">
        <div className="feeds-title">
          <h4>Feeds</h4>
        </div>
        <div className="feed-list">
            <div className="feed">
              <a>Top Stories</a>
            </div>
            <div className="feed">
              <a>
                New Questions
              </a>
            </div>
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
