import TopicIndexContainer from './topic/topic_index_container';
import QuestionIndexContainer from './question/question_index_container';
import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <div className='home-page-container'>
        <TopicIndexContainer />
        <QuestionIndexContainer />
      </div>
    );
  }
}

export default HomePage;