import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => ({
  comments: Object.keys(state.entities.comments).map(id => state.entities.comments[id]),
  question: ownProps.question,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchComments: answer => dispatch(fetchComments(answer))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));
