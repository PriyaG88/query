export const fetchComments = answer => {
  return $.ajax({
    method: 'GET',
    url: `/api/answers/${answer.id}/comments`
  });
};

export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: `/api/answers/${comment.answer_id}/comments`,
    data: { comment }
  });
};

export const updateComment = comment => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  });
};

export const deleteComment = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  });
};
