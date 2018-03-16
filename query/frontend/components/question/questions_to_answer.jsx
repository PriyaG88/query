import React, { Component } from 'react';
import QuestionToAnswerItem from './question_to_answer_item';
import TopicIndexContainer from '../topic/topic_index_container';

class QuestionsToAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  componentWillMount() {
    this.props.fetchQuestions();
    this.props.fetchAnswers();
  }

  render() {
    const questions = this.props.questions.map(question => (
      <QuestionToAnswerItem
        key={question.id}
        question={question}
        currentUser={this.props.currentUser}
        answers={this.props.answers}
        createAnswer={this.props.createAnswer} />
    ));

    return (
      <div className="content-wrapper">
        <TopicIndexContainer />
        <div className="questions-to-answer-container">
          <ul className="questions-to-answer-index">
            <div className="question-to-answer-item-box questions-for-you">
              <span className="star-image"></span> Questions for You
            </div>
            {questions}
          </ul>
        </div>
      </div>
    );
  }
}

export default QuestionsToAnswer;
