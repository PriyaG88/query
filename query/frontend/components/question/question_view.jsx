import React from 'react';
import merge from 'lodash/merge';
import AnswerEditor from '../answer/answer_editor';
import EditQuestionForm from './edit_question_form';
import AnswerIndexContainer from '../answer/answer_index_container';
import CommentIndexContainer from '../comment/comment_index_container';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorIsOpen: false,
      modalIsOpen: false,
      question: ''
    };

    this.toggleEditor = this.toggleEditor.bind(this);
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

  componentDidMount() {
    this.props.fetchQuestion(this.props.questionId);
  }

  render() {
    const id = this.props.questionId;
    const question = this.props.questions[id];
    return (
      <div>
          <div className="question-show-box">
            <div className="question-text-container">
              <h1 className="question-text">{question.body}</h1>
            </div>
            <div className="answer-btn-container">
              <a className="answer-btn" id="question-show-answer-btn">
                <span onClick={this.toggleEditor} className="answer-button-text">Answer</span>
              </a>
            </div>
            <a className="edit-btn">
              <span onClick={this.toggleModal}>Edit</span>
            </a>
          </div>

          {this.state.modalIsOpen && <EditQuestionForm
          question={this.props.question}
          updateQuestion={this.props.updateQuestion}
          questionState={this.state}
          toggleModal={this.toggleModal.bind(this)} />}

          <AnswerIndexContainer question={question}/>
          {this.state.editorIsOpen && <AnswerEditor
          question={question}
          createAnswer={this.props.createAnswer}
          currentUser={this.props.currentUser}
          toggleEditor={this.toggleEditor.bind(this)}/>}
      </div>
    );
  }
}

export default QuestionView;
