import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.question);
  }

  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <CommentIndexItem
            key={comment.id}
            comment={comment}
            currentUser={this.props.currentUser}/>
        ))}
      </div>
    );
  }
}

export default CommentIndex;
