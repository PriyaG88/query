import React from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';

class AnswerEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editorHtml: '', theme: 'snow' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
      ]
    };

    this.formats = [
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ];
  }
  //code inspired by https://codepen.io/alexkrolick/pen/xgyOXQ?editors=0010#0

  handleChange(html) {
    this.setState({editorHtml: html});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    const edited = this.state.editorHtml.replace(/<p>/, "").replace(/<\/p>/, "");
    const answer = {
      body: edited,
      question_id: this.props.question.id,
      user_id: this.props.currentUser.id
    };
    this.props.createAnswer(answer);
    this.props.toggleEditor();
  }

  render() {

    return (
      <div className="editor" className="question-editor">
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={AnswerEditor.modules}
          formats={AnswerEditor.formats}
          bounds={'.app'}
          placeholder="Write your answer"
         />
       <button className="blue-btn" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

AnswerEditor.propTypes = {
  placeholder: React.PropTypes.string,
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(AnswerEditor);
