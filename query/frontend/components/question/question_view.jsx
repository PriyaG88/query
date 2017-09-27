import React from 'react';
import { Redirect } from 'react-router';
import merge from 'lodash/merge';
import NavBarContainer from '../navbar/navbar_container';
import AnswerEditor from '../answer/answer_editor';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.questionId = parseInt(this.props.location.pathname.replace(/[^0-9\.]/g, ''), 10);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.question = this.props.questions[this.questionId];
    this.state = {
      editorIsOpen: false };
  }

  openEditor() {
    this.setState({editorIsOpen: true});
  }

  toggleEditor() {
    this.setState({editorIsOpen: !this.state.editorIsOpen});
  }

  handleDelete(e) {
    e.preventDefault();
    console.log(this.questionId);
    this.props.deleteQuestion(this.questionId);

  }

  render() {
    console.log('rendering');
    return (
      <div>
        <NavBarContainer />
          <div className="question-show-box">
            <h1 className="question-text">{this.question.body}</h1>
            <a className="answer-btn" id="question-show-answer-btn">
              <span onClick={this.toggleEditor} className="answer-button-text">Answer</span>
              {this.state.editorIsOpen && <AnswerEditor
              question={this.question}
              createAnswer={this.props.createAnswer}
              currentUser={this.props.currentUser}
              toggleEditor={this.toggleEditor}/>}
            </a>
            <button onClick={this.handleDelete}>Delete Question</button>
          </div>
      </div>
    );
  }
}

export default QuestionView;
