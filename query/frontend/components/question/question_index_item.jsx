import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const QuestionIndexItem = ({ question }) => {

  return (
    <li>
      <Link to={`/questions/${question.id}`}>
        {question.body}
      </Link>
    </li>
  );
};


export default QuestionIndexItem;
