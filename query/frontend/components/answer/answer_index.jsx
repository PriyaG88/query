import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAnswers(this.props.question);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.answers.map(answer => (
            <AnswerIndexItem
              key={answer.id}
              answer={answer}
              question={this.props.question}
              deleteAnswer={this.props.deleteAnswer}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default AnswerIndex;
