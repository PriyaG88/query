import React from 'react';
import ReactQuill from 'react-quill';
// import {Editor, EditorState, RichUtils} from 'draft-js';
// import createRichButtonsPlugin from 'draft-js-richbuttons-plugin';

class AnswerEditor extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {editorState: EditorState.createEmpty()};
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
    /*
     * Quill editor formats
     * See https://quilljs.com/docs/formats/
     */
    this.formats = [
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ];

  }

  componentWillReceiveProps(props) {
    this.currentUser = this.props.currentUser;
  }

  //code inspired by https://codepen.io/alexkrolick/pen/xgyOXQ?editors=0010#0

  handleChange(html) {
    this.setState({editorHtml: html});
  }

  handleSubmit(e) {
    e.preventDefault();
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
    // const richButtonsPlugin = createRichButtonsPlugin();
    // const {
    //   ItalicButton, BoldButton, MonospaceButton, UnderlineButton,
    //   ParagraphButton, BlockquoteButton, CodeButton, OLButton, ULButton, H1Button, H2Button, H3Button, H4Button, H5Button, H6Button
    // } = richButtonsPlugin;
    return (
      <div className="editor">
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={AnswerEditor.modules}
          formats={AnswerEditor.formats}
          bounds={'.app'}
          placeholder="Write your answer"
         />
       <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
/*
 * PropType validation
 */
AnswerEditor.propTypes = {
  placeholder: React.PropTypes.string,
};

export default AnswerEditor;

//   <div className="myToolbar">
//     <BoldButton/>
//     <ItalicButton/>
//     <H2Button/>
//     <ULButton/>
//     <OLButton/>
//   </div>
//   <Editor editorState={this.state.editorState} onChange={this.handleChange} placeholder="Write your Answer" />
