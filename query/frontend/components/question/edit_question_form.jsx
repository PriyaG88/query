import React from 'react';

class EditQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.toggleModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateQuestion(this.state);
    this.props.toggleModal();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div id="question-form-modal">
        <div className="modal-content">
          <span onClick={this.handleClick} className="close">&times;</span>
            <form onSubmit={this.handleSubmit}>
              <textarea type="text" value={this.state.body}
                onChange={this.update('body')}>
                {this.state.body}
              </textarea>
              <div>
                <span>
                  <a onClick={this.handleClick}>Cancel</a>
                </span>
                <input type="submit" value="Update"></input>
              </div>
            </form>
        </div>
      </div>
    );
  }
}

export default EditQuestionForm;
