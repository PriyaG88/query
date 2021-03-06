import React, { Component } from 'react';
import Avatar from 'react-avatar';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      body: "",
      user_id: this.props.currentUser.id,
      topic: "General"
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = this.state;
    this.props.createQuestion(question);
    this.props.toggleModal();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.toggleModal();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  select(e) {
    this.setState({['topic']: e.target.value});
  }

  render() {
    return (
      <div className="question-form-overlay">
        <div className="modal-container">
          <div className="ask-question-modal">
            <div className="modal-close">
              <span onClick={this.handleClick} className="close">&times;</span>
            </div>
            <div className="modal-content">
              <Avatar name={this.props.currentUser.name} size={25} round={true} textSizeRatio={2} />
              <span className="user-name">{this.props.currentUser.name} added</span>
              <textarea className="modal-text"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder="What is your question?"
                required>
              </textarea>
            </div>
            <div className="modal-footer">
              <select value={this.state.topic} onChange={this.select}>
                <option value="General">General</option>
                <option value="Behavior">Behavior</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Harry Potter">Harry Potter</option>
                <option value="Game of Thrones">Game of Thrones</option>
              </select>
              <input className="blue-btn ask-btn"
                type="submit"
                value="Ask Question"
                onClick={this.handleSubmit}></input>
              <a className="cancel-modal-btn" onClick={this.handleClick}>Cancel</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionForm;
