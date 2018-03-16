import React, { Component } from 'react';
import Avatar from 'react-avatar';
import QuestionIndexItem from './question_index_item';
import QuestionModal from './question_modal';
import Loader from '../ui/Loader';

class QuestionIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };
  }

  componentDidMount() {
    this.props.fetchQuestions();
    this.props.fetchAnswers()
    .then(answers => this.setState({ answers: Object.values(answers.answers) }));
    this.props.fetchComments();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.questions.length !== nextProps.questions.length ) {
      this.props.fetchQuestions();
    } else if (this.props.answers.length !== nextProps.answers.length ) {
      this.props.fetchAnswers()
      .then(answers => this.setState({ answers: Object.values(answers.answers) }));
    }
  }

  render() {
    if (this.state.answers.length > 0) {
      const questions = this.props.questions.reverse().map(question => (
        <QuestionIndexItem
          key={question.id}
          question={question}
          answers={this.state.answers}
          comments={this.props.comments}
          currentUser={this.props.currentUser}
          updateQuestion={this.props.updateQuestion}
          deleteQuestion={this.props.deleteQuestion}
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
