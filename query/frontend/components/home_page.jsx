import React, { Component } from 'react';
import QuestionIndexContainer from './question/question_index_container';
import TopicIndexContainer from './topic/topic_index_container';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='homepage-container'>
        <TopicIndexContainer />
        <QuestionIndexContainer />
      </div>
    );
  }
}

export default HomePage;
