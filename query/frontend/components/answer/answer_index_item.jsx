import React from 'react';
import CommentIndexContainer from '../comment/comment_index_container';

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
        <div className="comment-index">
          <CommentIndexContainer question={this.props.question}/>
        </div>
      </div>
    );
  }
}

export default AnswerIndexItem;
