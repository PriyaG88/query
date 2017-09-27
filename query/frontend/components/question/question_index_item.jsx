import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AnswerEditor from '../answer/answer_editor';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.question = this.props.question;
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      editorIsOpen: false };
  }

  openEditor() {
    this.setState({editorIsOpen: true});
  }

  toggleEditor() {
    this.setState({editorIsOpen: !this.state.editorIsOpen});
  }

  render() {
    return (
      <div className="question-item-box">
        <div className="question-item">
          <div className="question-text-container">
            <Link className="question-item-link" to={`/questions/${this.question.id}`}>
              {this.question.body}
            </Link>
          </div>
          <div className="answer-btn-container">
            <a className="answer-btn" >
              <span onClick={this.toggleEditor} className="answer-button-text">Answer</span>
            </a>
          </div>
        </div>

          {this.state.editorIsOpen && <AnswerEditor
          question={this.question}
          createAnswer={this.props.createAnswer}
          currentUser={this.props.currentUser}
          toggleEditor={this.toggleEditor}/>}
      </div>
    );
  }
}

export default withRouter(QuestionIndexItem);
