import React from 'react';
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from '../comment/comment_index_container';
import Avatar from 'react-avatar';

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.answer = this.props.answer;

  }


  render() {
    const author = this.props.answer.author.name;

    return (
      <div className="answer-item-index">
        <div className="avatar">
          <Avatar name={author} size={40} round={true} textSizeRatio={2} />
        </div>
        <div className="asker-name">{author}</div>
        {this.answer.body}
        <div className="comment-section">
          <div className="comment-form"><CommentFormContainer id={this.answer.id}/></div>
        </div>
        <div>
          <div className="comment-index"><CommentIndexContainer answer={this.answer}/></div>
        </div>
      </div>
    );
  }
}

export default AnswerIndexItem;
