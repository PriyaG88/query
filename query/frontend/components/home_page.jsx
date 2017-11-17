import React from 'react';
import QuestionIndexContainer from './question/question_index_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home-page-container'>
        <QuestionIndexContainer />
      </div>
    );
  }
}

export default HomePage;
