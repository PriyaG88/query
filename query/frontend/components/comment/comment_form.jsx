import React from 'react';
import Avatar from 'react-avatar';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: "",
      user_id: this.props.currentUser.id,
      answer_id: this.props.answerId
    };
  }

  update(field) {
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({body: "", user_id: null, answer_id: null});
  }

  render() {
    return (
      <div>
        <span className="comment-avatar">
          <Avatar name={this.props.currentUser.name} size={20} round={true} textSizeRatio={2} />
        </span>
          <input type="text"
            className="comment-input"
            placeholder="Add a comment..."
            onChange={this.update('body')}
            value={this.state.body}></input>

        <button
          className="comment-btn"
          onClick={this.handleSubmit}>Comment
        </button>
      </div>
    );
  }
}

export default CommentForm;
