import React from 'react';
import TopicIndexContainer from './topic_index_container';
import { Link } from 'react-router-dom';
import QuestionIndexItem from '../question/question_index_item';

class TopicView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: ''
    };

  }

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchAnswers();
    this.props.fetchTopic(this.props.topicId)
    .then(topic => this.setState({ topic: topic.topic
    }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.topicId !== nextProps.topicId ) {
      this.props.fetchTopic(nextProps.topicId)
      .then(topic => this.setState({ topic: topic.topic
      }));
    } else if (this.props.answers.length !== nextProps.answers.length ) {
      this.props.fetchAnswers();
    }
  }

  topicQuestions() {
    return this.props.questions.filter(question => (
      question.topic === this.props.topic.name
    ));
  }

  render() {
    const questions = this.topicQuestions();

    if (this.state.topic) {
      return (
        <div>
          <TopicIndexContainer />
          <div className="question-index-container">
              <ul className="question-index">
                <div className="question-item-box topic">
                  <h1>{this.props.topic.name}</h1>
                </div>
                {questions.reverse().map(question => (
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
    } else {
      return null;
    }
  }
}

export default TopicView;
