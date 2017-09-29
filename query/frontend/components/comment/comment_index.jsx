import React from 'react';
import Avatar from 'react-avatar';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  comments() {
    let comments = this.props.comments.filter(comment => comment.answer_id === this.props.answerId);
    return comments;
  }

  render() {
    const comments = this.comments();
    if (!comments) {
      return (
        <div>
        </div>
      );
    }
    return (
      <div>
        { comments.map(comment => (
          <div>
            {comment.body}
          </div>
        ))}
      </div>
    );
  }
}

export default CommentIndex;
