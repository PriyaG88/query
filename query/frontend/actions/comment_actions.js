import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const fetchComments = answer => dispatch => (
  CommentAPIUtil.fetchComments(answer).then(comments =>
    dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment).then(comment =>
    dispatch(receiveComment(comment)))
);

export const deleteComment = id => dispatch => (
  CommentAPIUtil.deleteComment(id).then(comment =>
    dispatch(removeComment(comment)))
);

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});
