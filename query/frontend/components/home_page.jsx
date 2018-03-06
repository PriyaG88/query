import React from 'react';
import QuestionIndexContainer from './question/question_index_container';
import TopicIndexContainer from './topic/topic_index_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home-page-container'>
        <div className='wrapper'>
          <TopicIndexContainer />
          <QuestionIndexContainer />
        </div>
      </div>
    );
  }
}

export default HomePage;
