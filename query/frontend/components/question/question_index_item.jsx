import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AnswerEditor from '../answer/answer_editor';
import Avatar from 'react-avatar';
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from '../comment/comment_index_container';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      editorIsOpen: false,
      answer: ""
    };
  }

  openEditor() {
    this.setState({editorIsOpen: true});
  }

  toggleEditor() {
    this.setState({editorIsOpen: !this.state.editorIsOpen});
  }

  answers() {
    const id = this.props.question.id;
    let answers = this.props.answers.filter(answer => answer.question_id === id);
    return answers[0];
  }

  render() {
    const answer = this.answers();
    const currentUser = this.props.currentUser;
    if (!answer) {
      return (
        <div className="question-item-box">
          <div className="question-item">
            <div className="question-text-container">
              <h6 className="question-header">Question asked · {this.props.question.topic}</h6>
              <Link className="question-item-link" to={`/questions/${this.props.question.id}`}>
                {this.props.question.body}
              </Link>
            </div>
            <div className="answer-btn-container">
              <a className="answer-btn" >
                <span onClick={this.toggleEditor} className="answer-button-text">Answer</span>
              </a>
            </div>
          </div>
          <div className="question-index-answer">
            {this.state.editorIsOpen && <AnswerEditor
            question={this.props.question}
            createAnswer={this.props.createAnswer}
            currentUser={this.props.currentUser}
            toggleEditor={this.toggleEditor}/>}
          </div>
        </div>
      );
    }
    return (
      <div className="question-item-box">
        <div className="question-item">
          <div className="question-text-container">
            <h6 className="question-header">Answer · {this.props.question.topic}</h6>
            <Link className="question-item-link" to={`/questions/${this.props.question.id}`}>
              <span className="question">{this.props.question.body}</span>
            </Link>
          </div>
          <div className="answer-section">
            <div className="answer-user-info">
              <div className="avatar">
                <Avatar name={this.props.currentUser.name} size={40} round={true} textSizeRatio={2} />
                <span className="name">{this.props.currentUser.name}</span>
              </div>

            </div>
            <div className="question-answer-item">
              {answer.body}
            </div>
          </div>
          <div className="comment-section">
            <div className="comment-form"><CommentFormContainer id={answer.id}/></div>
          </div>
          <div className="comment-index">
            <div className="comment-index-container"><CommentIndexContainer answer={answer}/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default (QuestionIndexItem);
