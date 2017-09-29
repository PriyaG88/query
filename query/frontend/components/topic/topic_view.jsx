import React from 'react';
import TopicIndexContainer from './topic_index_container';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import QuestionIndexItem from '../question/question_index_item';


class TopicView extends React.Component {
  constructor(props) {
    super(props);
    this.topicId = parseInt(this.props.location.pathname.replace(/[^0-9\.]/g, ''), 10);

  }

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchTopics();

  }

  topicQuestions(id) {
    const topic = this.props.topics[id];
    let questions = this.props.questions.filter(question => (
      question.topic === topic.name
    ));
    return questions;
  }

  render() {
    const questions = this.topicQuestions(this.topicId);

    return (
      <div>
        <TopicIndexContainer />
        <div className="question-index-container">
          <div className="question-item-box">
            <div className="question-item">
              <div className="question-text-container">
                <div className="topic-view">
                  <ul className="question-index">
                    {questions.map(question => (
                      <Link className="question-item-link"to={`/questions/${question.id}`}>
                        {question.body}
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopicView;
