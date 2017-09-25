import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AnswerEditor from '../answer/answer_editor';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.question = this.props.question;
    this.state = {
      editorIsOpen: false };
  }

  openEditor() {
    this.setState({editorIsOpen: true});
  }

  closeEditor() {
    this.setState({editorIsOpen: false});
  }

  render() {
    return (
      <div className="question-item-box">
        <div className="question-item">
          <Link className="question-item-link" to={`/questions/${this.question.id}`}>
            {this.question.body}
          </Link>
          <a className="answer-btn" onClick={this.openEditor.bind(this)}>
            <span className="answer-button-text">Answer</span>
            {this.state.editorIsOpen && <AnswerEditor
            question={this.question}
            createAnswer={this.props.createAnswer}
            currentUser={this.props.currentUser}
            closeEditor={this.closeEditor.bind(this)}/>}
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(QuestionIndexItem);
