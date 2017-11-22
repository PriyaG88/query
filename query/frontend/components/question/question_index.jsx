import React from 'react';
import QuestionIndexItem from './question_index_item';
import QuestionFormContainer from './question_form_container';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  componentDidMount() {
    this.props.fetchAnswers();
    this.props.fetchComments();
  }

  render() {
    const questions = this.props.questions.reverse().map(question => (
      <QuestionIndexItem
        key={question.id}
        question={question}
        answers={this.props.answers}
        comments={this.props.comments}
        currentUser={this.props.currentUser}
        updateQuestion={this.props.updateQuestion}
        deleteQuestion={this.props.deleteQuestion}
        createAnswer={this.props.createAnswer} />
    ));
    return (

        <ul className="question-index">
          <div className="ask-question">
            <div className="user-prompt">
              <a className="user-name">{this.props.currentUser.name}</a>
              <br/>
              <div className="user-prompt-text" onClick={this.toggleModal.bind(this)}>
                What is your question?
              </div>
              {this.state.modalIsOpen && <QuestionFormContainer toggleModal={this.toggleModal.bind(this)}/>}
            </div>
          </div>
          {questions}
        </ul>
      
    );
  }
}

export default QuestionIndex;
