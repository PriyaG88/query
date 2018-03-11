export const answers = state => {
  return Object.values(state.entities.answers);
};

export const questions = state => {
  return Object.values(state.entities.questions);
};

export const singleQuestion = (state, id) => {
  return state.entities.questions[id];
};

export const comments = state => {
  return Object.values(state.entities.comments);
};

export const topics = state => {
  return Object.values(state.entities.topics);
};

export const singleTopic = (state, id) => {
  return state.entities.topics[id];
};
