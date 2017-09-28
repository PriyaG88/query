import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AnswerEditor from '../answer/answer_editor';
import Answer from '../answer/answer';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.state = {
      editorIsOpen: false,
      answer: this.props.answers
    };
  }

  openEditor() {
    this.setState({editorIsOpen: true});
  }

  toggleEditor() {
    this.setState({editorIsOpen: !this.state.editorIsOpen});
  }

  componentWillReceiveProps() {
    this.answers = this.props.answers;
    this.filteredAnswers = this.answers.filter(answer => answer.question_id === this.props.question.id);
    this.setState({answer: this.filteredAnswers[0]})
  }

  render() {
    console.log('rendering...');
    if (!this.state.answer) {
      return (<div>'..loading'</div>);
    }
    return (
      <div className="question-item-box">
        <div className="question-item">
          <div className="question-text-container">
            <Link className="question-item-link" to={`/questions/${this.props.question.id}`}>
              {this.props.question.body}
            </Link>
          </div>
          <div className="answer-btn-container">
            <a className="answer-btn" >
              <span onClick={this.toggleEditor} className="answer-button-text">Answer</span>
            </a>
          </div>
            <div className="answer-item">
              {this.state.answer[0].body}
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
