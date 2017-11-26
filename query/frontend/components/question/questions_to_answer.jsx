import React, { Component } from 'react';
import QuestionToAnswerItem from './question_to_answer_item';
import QuestionFormContainer from './question_form_container';

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
      <div className="questions-to-answer-container">
        <ul className="questions-to-answer-index">
          {this.state.modalIsOpen && <QuestionFormContainer toggleModal={this.toggleModal.bind(this)}/>}
          {questions}
        </ul>
      </div>
    );
  }
}

export default QuestionsToAnswer;
