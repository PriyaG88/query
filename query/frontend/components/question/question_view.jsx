import React, { Component } from 'react';
import AnswerEditor from '../answer/answer_editor';
import EditQuestionForm from './edit_question_form';
import AnswerIndexContainer from '../answer/answer_index_container';
import Loader from '../ui/Loader';

class QuestionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorIsOpen: false,
      modalIsOpen: false,
      question: ''
    };

    this.toggleEditor = this.toggleEditor.bind(this);
  }

  componentDidMount() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('question-show-background');

    this.props.fetchQuestion(this.props.questionId)
    .then(question => this.setState({
      question: this.props.questions[this.props.questionId]
    }));
  }

  //if user searches for a question while on the question view page,
  // the route will change but will not refresh -
  // lifecycle method forces a reload

  componentWillReceiveProps(nextProps) {
    if (this.props.questionId !== nextProps.questionId) {
      this.setState({
        question: this.props.questions[nextProps.questionId]
      });
    }
  }

  componentWillUnmount() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('question-show-background');
  }

  openEditor() {
    this.setState({editorIsOpen: true});
  }

  toggleEditor() {
    this.setState({editorIsOpen: !this.state.editorIsOpen});
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  render() {
    const question = this.state.question;

    if (question) {
      return (
        <div className="question-show-container">
            <div className="question-show-box">
              <div className="question-text-container">
                <h1 className="question-text">{question.body}</h1>
              </div>
              <div className="answer-btn-container">
                <a className="answer-btn" id="question-show-answer-btn">
                  <span onClick={this.toggleEditor} className="answer-button-text">Answer</span>
                </a>
              </div>
              {this.state.editorIsOpen && <AnswerEditor
              question={question}
              createAnswer={this.props.createAnswer}
              currentUser={this.props.currentUser}
              toggleEditor={this.toggleEditor.bind(this)}/>}
            </div>

            {this.state.modalIsOpen && <EditQuestionForm
            question={this.props.question}
            updateQuestion={this.props.updateQuestion}
            questionState={this.state}
            toggleModal={this.toggleModal.bind(this)} />}

            <AnswerIndexContainer question={question}/>

        </div>
      );
    }
    return (
      <Loader />
    );
  }
}

export default QuestionView;
