import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const QuestionIndexItem = ({ question }) => {
  return (
    <div className="question-item">
      <Link className="question-item-link" to={`/questions/${question.id}`}>
        {question.body}
      </Link>
    </div>
  );
};


export default withRouter(QuestionIndexItem);
