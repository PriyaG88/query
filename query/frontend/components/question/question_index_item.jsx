import React from 'react';

class Question {
  constructor(props) {
    super(props);
    this.question = this.props.question;
  }

  render() {
    return (
      <div>
        <Link to={`/questions/${this.question.id}`}>
          {this.question.body}
        </Link>

      </div>
    );
  }
}
