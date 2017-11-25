export const answers = state => {
  return Object.values(state.entities.answers);

};

export const questions = state => {
  return Object.values(state.entities.questions);
};

// export const questionsWithoutAnswers = state => {
//   const allQuestions = questions(state);
//   const allAnswers = answers(state);
//   allQuestions.filter(question => )
//
// };

export const comments = state => {
  return Object.values(state.entities.comments);
};

export const topics = state => {
  return Object.values(state.entities.topics);
};
