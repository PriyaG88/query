import React from 'react';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: "",
      user_id: this.props.currentUser.id,
      topic: "placeholder"
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = this.state;
    this.props.createQuestion(question);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    console.log(this.state);
    return (
      <div id="question-form-modal">
        <div className="modal-content">
          <span className="close">&times;</span>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder="What is your question?">
              </input>
              <input type="submit" value="Ask Question"></input>
            </form>
          </div>
      </div>
    );
  }
}

export default QuestionForm;
