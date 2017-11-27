import React from 'react';
import TopicIndexContainer from './topic_index_container';
import { Link } from 'react-router-dom';
import QuestionIndexItem from '../question/question_index_item';

class TopicView extends React.Component {
  constructor(props) {
    super(props);
    this.topicId = parseInt(this.props.location.pathname.replace(/[^0-9\.]/g, ''), 10);
    console.log(this.topicId);
    this.topics = {
      1: "Behavior",
      2: "Harry Potter",
      3: "Computer Science",
      4: "Game of Thrones",
      5: "General"
    };
  }

  componentWillMount() {
    this.props.fetchQuestions();
    this.props.fetchTopics();
  }

  topicQuestions(id) {
    const topic = this.props.topics[id - 1];
    console.log(topic);
    let questions = this.props.questions.filter(question => (
      question.topic === topic.name
    ));
    return questions;
  }

  render() {
    const questions = this.topicQuestions(this.topicId);

    return (
      <div>
        <div className="question-index-container">
            <ul className="question-index topic-view">
              <div className="question-item-box topic">
                <h1>{this.topics[this.topicId]}</h1>
              </div>
              {questions.map(question => (
                <QuestionIndexItem
                  key={question.id}
                  question={question}
                  answers={this.props.answers}
                  comments={this.props.comments}
                  currentUser={this.props.currentUser}
                  updateQuestion={this.props.updateQuestion}
                  deleteQuestion={this.props.deleteQuestion}
                  createAnswer={this.props.createAnswer} />
              ))}
            </ul>
        </div>
      </div>
    );
  }
}

export default TopicView;
