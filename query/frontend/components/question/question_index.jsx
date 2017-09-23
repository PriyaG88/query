import React from 'react';
import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.questions.map(question => (
            <QuestionIndexItem
              key={question.id}
              question={question} />
          ))}
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
