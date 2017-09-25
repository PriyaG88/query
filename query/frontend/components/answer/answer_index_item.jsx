import React from 'react';

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.answer = this.props.answer;
  }

  render() {
    return (
      <div>
        {this.answer.body}
      </div>
    );
  }
}

export default AnswerIndexItem;
