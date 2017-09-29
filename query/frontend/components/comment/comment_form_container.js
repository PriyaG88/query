import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({
  answerId: ownProps.id,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: comment =>  dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
