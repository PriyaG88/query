import React from 'react';
import QuestionIndexItem from './question_index_item';
import NavBarContainer from '../navbar/navbar_container';

class QuestionIndex extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div className="question-index-container">
        <NavBarContainer />
        <ul className="question-index">
          {this.props.questions.map(question => (
            <QuestionIndexItem
              key={question.id}
              question={question}
              updateQuestion={this.props.updateQuestion}
              deleteQuestion={this.props.deleteQuestion} />
          ))}
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
