import React from 'react';
import merge from 'lodash/merge';
import NavBarContainer from '../navbar/navbar_container';
import AnswerEditor from '../answer/answer_editor';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.questionId = parseInt(this.props.location.pathname.replace(/[^0-9\.]/g, ''), 10);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      editorIsOpen: false };
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  openEditor() {
    this.setState({editorIsOpen: true});
  }

  toggleEditor() {
    this.setState({editorIsOpen: !this.state.editorIsOpen});
  }

  render() {
    return (
      <div>
        <NavBarContainer />
          <div className="question-show-box">
            <h1 className="question-text">{this.props.questions[this.questionId].body}</h1>
            <a className="answer-btn" id="question-show-answer-btn">
              <span onClick={this.toggleEditor} className="answer-button-text">Answer</span>
              {this.state.editorIsOpen && <AnswerEditor
              question={this.props.questions[this.questionId]}
              createAnswer={this.props.createAnswer}
              currentUser={this.props.currentUser}
              toggleEditor={this.toggleEditor}/>}
            </a>
            {}
          </div>
      </div>
    );
  }
}

export default QuestionView;
