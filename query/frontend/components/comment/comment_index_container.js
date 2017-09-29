import { connect } from 'react-redux';
import { comments } from '../../reducers/selectors';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  comments: comments(state),
  answerId: ownProps.answer.id
});

const mapDispatchToProps = (dispatch, {answer}) => ({
  fetchComments: answer => dispatch(fetchComments(answer))
});

export default connect(mapStateToProps, null)(CommentIndex);
