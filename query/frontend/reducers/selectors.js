export const answers = state => {
  return Object.values(state.entities.answers);
};

export const questions = state => {
  return Object.values(state.entities.questions);
};

export const comments = state => {
  return Object.values(state.entities.comments);
};

export const topics = state => {
  return Object.values(state.entities.topics);
};

export const questionsWithoutAnswers = state => {
  const allAnswers = answers(state);
  const allQuestions = questions(state);
  console.log(allAnswers);
  console.log(allQuestions);
  const answerQuestionIds = [];
  allAnswers.forEach(answer => answerQuestionIds.push(answer.question_id));
  const filtered = allQuestions.filter(question =>
    !answerQuestionIds.includes(question.id));
  console.log(filtered);
  return filtered;
};
