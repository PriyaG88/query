import React from 'react';
import QuestionIndexContainer from './question/question_index_container';
import NavBarContainer from './navbar/navbar_container';
import TopicIndexContainer from './topic/topic_index_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home-page-container'>
        <NavBarContainer />
        <div className="topics-list">
          <TopicIndexContainer />
        </div>
        <div className="questions-list">
          <QuestionIndexContainer />
        </div>
      </div>
    );
  }
}

export default HomePage;
