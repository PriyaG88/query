import React from 'react';
import Avatar from 'react-avatar';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  answerComments() {
    const id = this.props.answerId;
    let comments = this.props.comments.filter(comment => comment.answer_id === id);
    return comments
  }

  render() {
    const comments = this.answerComments();

    if (comments.length === 0) {
      return (<div>Be the first to add a comment!</div>);
    }
    return (
      <div>
        <ul className="comment-index-container">
        { comments.map(comment => (
          <div>
            {comment.body}
          </div>
        ))}
        </ul>
      </div>
    );
  }
}

export default CommentIndex;
