import React from 'react';
import { Redirect } from 'react-router';
import merge from 'lodash/merge';
import NavBarContainer from '../navbar/navbar_container';
import AnswerEditor from '../answer/answer_editor';
import EditQuestionForm from './edit_question_form';
import AnswerIndexContainer from '../answer/answer_index_container';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.questionId = parseInt(this.props.location.pathname.replace(/[^0-9\.]/g, ''), 10);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.question = this.props.questions[this.questionId];
    this.state = {
      editorIsOpen: false,
      modalIsOpen: false,
      question: this.question
    };
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

  handleDelete(e) {
    e.preventDefault();
    console.log(this.questionId);
    this.props.deleteQuestion(this.questionId);
    
  }

  render() {
    return (
      <div>
        <NavBarContainer />
          <div className="question-show-box">
            <div className="question-text-container">
              <h1 className="question-text">{this.question.body}</h1>
            </div>
            <div className="answer-btn-container">
              <a className="answer-btn" id="question-show-answer-btn">
                <span onClick={this.toggleEditor} className="answer-button-text">Answer</span>
              </a>
            </div>
            {this.question.user_id === this.props.currentUser.id ? (
              <button onClick={this.handleDelete}>Delete Question</button>
            ) : (
              ""
            )}
            <a className="edit-btn">
              <span onClick={this.toggleModal}>Edit</span>
            </a>
          </div>

          {this.state.modalIsOpen && <EditQuestionForm
          question={this.question}
          updateQuestion={this.props.updateQuestion}
          toggleModal={this.toggleModal} />}

          <AnswerIndexContainer question={this.question}/>
          {this.state.editorIsOpen && <AnswerEditor
          question={this.question}
          createAnswer={this.props.createAnswer}
          currentUser={this.props.currentUser}
          toggleEditor={this.toggleEditor}/>}
      </div>
    );
  }
}

export default QuestionView;
