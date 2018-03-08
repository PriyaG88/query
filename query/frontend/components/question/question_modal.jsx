import React, { Component } from 'react';
import Avatar from 'react-avatar';
import QuestionFormContainer from './question_form_container';

class QuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  render() {
    return (
      <div className="ask-question">
        <div className="user-prompt">
          <Avatar
            name={this.props.currentUser.name}
            size={20}
            round={true}
            textSizeRatio={2} />
          <span className="user-name">{this.props.currentUser.name}</span>
          <br/>
          <div className="user-prompt-text" onClick={this.toggleModal.bind(this)}>
            What is your question?
          </div>
          {this.state.modalIsOpen &&
            <QuestionFormContainer toggleModal={this.toggleModal.bind(this)}/>}
        </div>
      </div>
    );
  }
}

export default QuestionModal;
