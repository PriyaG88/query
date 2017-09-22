import React from 'react';
import QuestionIndexItem from './question_index_item';

class QuestonIndex extends React.Component {

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <div>
        {this.props.questions.map(question => (
          <QuestionIndexItem question={question} />
        ))}
      </div>
    );
  }
}
