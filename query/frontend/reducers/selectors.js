export const answers = state => {
  const allAnswers = Object.keys(state.entities.answers).map(id => state.entities.answers[id]);
  return allAnswers;
};

export const questions = state => {
  const allQuestions = Object.keys(state.entities.questions).map(id => state.entities.questions[id]);
  return allQuestions;
};

export const comments = state => {
  return Object.keys(state.entities.comments).map(id => state.entities.comments[id]);
};

export const topics = state => {
  const allTopics = Object.keys(state.entities.topics).map(id => state.entities.topics[id]);
  return allTopics;
};
