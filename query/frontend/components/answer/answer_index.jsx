import React from 'react';
import AnswerIndexItem from './answer_index_item';
import Loader from '../ui/Loader';

class AnswerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };
  }

  componentDidMount() {
    this.props.fetchAnswers()
    .then(answers => this.setState({ answers: Object.values(answers.answers) }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.answers.length !== nextProps.answers.length) {
      this.props.fetchAnswers()
      .then(answers => this.setState({ answers: Object.values(answers.answers) }));
    }
  }

  filteredAnswers() {
    return (
      this.state.answers.filter(
        answer => answer.question_id === this.props.question.id )
    );
  }

  render() {
    if (this.state.answers.length > 0) {
      const filteredAnswers = this.filteredAnswers();

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
    return (
      <Loader />
    );
  }
}


export default AnswerIndex;
