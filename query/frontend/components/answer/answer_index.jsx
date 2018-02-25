import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };
  }

  componentDidMount() {
    this.props.fetchAnswers()
    .then(answers => this.setState({ answers }));
  }

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
              fetchUser={this.props.fetchUser}
              currentUser={this.props.currentUser}
              deleteAnswer={this.props.deleteAnswer}/>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {

};

export default AnswerIndex;
