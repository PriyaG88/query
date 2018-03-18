import React, { Component } from 'react';
import Avatar from 'react-avatar';
import QuestionIndexItem from './question_index_item';
import QuestionModal from './question_modal';
import Loader from '../ui/Loader';

class QuestionIndex extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchAnswers();
    this.props.fetchComments();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.questions.length !== nextProps.questions.length) {
      this.props.fetchQuestions();
    }
    else if (this.props.answers.length !== nextProps.answers.length) {
      this.props.fetchAnswers();
    }
  }

  render() {
    if (this.props.answers.length > 0) {
      const questions = this.props.questions.reverse().map(question => (
        <QuestionIndexItem
          key={question.id}
          question={question}
          answers={this.props.answers}
          comments={this.props.comments}
          currentUser={this.props.currentUser}
          createAnswer={this.props.createAnswer} />
      ));

      return (
        <ul className="question-index">
          <QuestionModal currentUser={this.props.currentUser}/>
          {questions}
        </ul>
      );
    }

    return (
      <Loader />
    );

  }
}

export default QuestionIndex;
