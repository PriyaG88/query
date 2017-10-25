import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchAnswers();
  // }

  render() {
    const filteredAnswers = this.props.answers.filter(answer => answer.question_id === this.props.question.id);
    return (
      <div>
        <div className="answers-count">{filteredAnswers.length} Answer(s)</div>
        <ul className="answer-index">
          {filteredAnswers.map(answer => (
            <AnswerIndexItem
              key={answer.id}
              answer={answer}
              question={this.props.question}
              currentUser={this.props.currentUser}
              deleteAnswer={this.props.deleteAnswer}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnswerIndex;
