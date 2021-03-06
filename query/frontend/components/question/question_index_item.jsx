import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import AnswerEditor from '../answer/answer_editor';
import Avatar from 'react-avatar';
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from '../comment/comment_index_container';
import Loader from '../ui/Loader';

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

  answer() {
    const id = this.props.question.id;
    const answers = this.props.answers.filter(answer => answer.question_id === id);
    const answer = answers.length > 0 ? answers[0] : null;
    return answer;
  }

  render() {
    const answer = this.answer();
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

    else if (answer.author) {
      const date = new Date(Date.parse(answer.created_at));
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
                  <Avatar className="answer-avatar"
                    name={answer.author.name}
                    size={40}
                    round={true}
                    textSizeRatio={2} />
                  <div className="answer-details">
                    <div className="name">{answer.author.name}</div>
                    <div className="date-answered">Answered on {date.toDateString()}
                    </div>
                  </div>

                </div>
              </div>
              <div className="question-answer-item">
                {ReactHtmlParser(answer.body)}
              </div>
            </div>
            <div className="comment-section">
              <CommentFormContainer id={answer.id}/>
            </div>
            <div className="comment-index">
              <div className="comment-index-container"><CommentIndexContainer answer={answer}/></div>
            </div>
          </div>
        </div>
      );
    }

    else {
      return (
        <Loader />
      );
    }
  }
}

export default QuestionIndexItem;
