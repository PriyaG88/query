import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from '../comment/comment_index_container';
import Avatar from 'react-avatar';

const AnswerIndexItem = props =>  {
  const answer = props.answer;
  const author = answer.author.name;
  const date = new Date(Date.parse(answer.created_at));

  return (
    <div className="answer-item-index">
      <div className="answer-section">
        <div className="answer-user-info">
          <div className="avatar">
            <Avatar className="answer-avatar"
              name={author}
              size={40}
              round={true}
              textSizeRatio={2} />
            <div className="answer-details">
              <div className="name">{answer.author.name}</div>
              <div className="date-answered">Answered on {date.toDateString()}
              </div>
            </div>
          </div>
        </div>
        <div className="question-answer-item">
          {ReactHtmlParser(answer.body)}
        </div>
      </div>
      <div className="comment-section">
        <div className="comment-form">
          <CommentFormContainer id={answer.id}/>
        </div>
      </div>
      <div>
        <div className="comment-index">
          <CommentIndexContainer answer={answer}/>
        </div>
      </div>
    </div>
  );
};

export default AnswerIndexItem;
