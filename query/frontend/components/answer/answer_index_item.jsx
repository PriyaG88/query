import React from 'react';

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.answer = this.props.answer;
  }

  render() {
    return (
      <div className="answer-item">
        <div className="asker-name">{this.props.currentUser.name}</div>
        {this.answer.body}
      </div>
    );
  }
}

export default AnswerIndexItem;
