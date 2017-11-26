import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuestionToAnswerItem extends Component {
  constructor(props) {
    super(props);
  }

  answers() {
    const id = this.props.question.id;
    let answers = this.props.answers.filter(answer => answer.question_id === id);
    return answers.length;
  }

  render() {
    const answerCount = this.answers();
    return(
      <div className="question-item-box">
        <div className="question-item">
          <div className="question-text-container">
            <h6 className="question-header">Question asked · {this.props.question.topic}</h6>
            <Link className="question-item-link" to={`/questions/${this.props.question.id}`}>
              {this.props.question.body}
            </Link>
            <div>
              <Link className="answer-count" to={`/questions/${this.props.question.id}`}>
                { answerCount > 0 ? answerCount + " Answers" : "" }
              </Link>
            </div>
          </div>
          <div className="answer-btn-container">
            <a className="answer-btn" >
              <span onClick={this.toggleEditor} className="answer-button-text">Answer</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionToAnswerItem;
