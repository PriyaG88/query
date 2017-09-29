import React from 'react';

class QuestionForm extends React.Component {
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
              <textarea
                type="text"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder="What is your question?">
              </textarea>
              <select value={this.state.topic} onChange={this.select}>
                <option value="General">General</option>
                <option value="Behavior">Behavior</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Harry Potter">Harry Potter</option>
                <option value="Game of Thrones">Game of Thrones</option>
              </select>
              <button onClick={this.handleClick}>Cancel</button>
              <input type="submit" value="Ask Question"></input>
            </form>
          </div>
      </div>
    );
  }
}

export default QuestionForm;
