export const createAnswer = answer => {
  return $.ajax({
    method: 'GET',
    url: `api/questions/${answer.question_id}/answers`,
    data: { answer }
  });
};

export const updateAnswer = answer => {
  return $.ajax({
    method: 'PATCH',
    url: `api/questions/${answer.question_id}/answers/${answer.id}`,
    data: { answer }
  });
};

export const deleteAnswer = answer => {
  return $.ajax({
    method: 'DELETE',
    url: `api/questions/${answer.question_id}/answers/${answer.id}`
  });
};
