export const answers = state => {
  return Object.keys(state.entities.answers).map(id => state.entities.answers[id]);
};

export const questions = state => {
  return Object.keys(state.entities.questions).map(id => state.entities.questions[id]);
};
