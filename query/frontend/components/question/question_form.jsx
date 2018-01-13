import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
      <div id="question-form-modal">
        <div className="modal-content">
          <span onClick={this.handleClick} className="close">&times;</span>
            <form onSubmit={this.handleSubmit}>
              <input className="modal-text"
                autoFocus="true"
                width="556"
                rows="1"
                type="text"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder="What is your question?">
              </input>
              <select value={this.state.topic} onChange={this.select}>
                <option value="General">General</option>
                <option value="Behavior">Behavior</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Harry Potter">Harry Potter</option>
                <option value="Game of Thrones">Game of Thrones</option>
              </select>
              <Button onClick={this.handleClick}>Cancel</Button>
              <input type="submit" value="Ask Question"></input>
            </form>
          </div>
      </div>
    );
  }
}

export default QuestionForm;
