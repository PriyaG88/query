# Query

[Query Live](https://query-webapp.herokuapp.com/#/enter)

Query is a full-stack application, inspired by Quora, which allows users to ask and answer other user-generated questions.  The technology used for the application includes Rails for the backend, React/Redux on the frontend and PostgresQL as the database.

## Features

### Questions

Questions are the foundation of Query as they stimulate conversation and user engagement.  The `QuestionIndexContainer` component is loaded upon successful user login (or signup) via an AJAX get request and all questions are also loaded into the application state via redux.  

![](https://github.com/PriyaG88/query/blob/master/docs/screen-clippings/QuestionIndex.png)

Users are able to ask questions via the Ask Question button on the navigation or through the prompt right above the `QuestionIndexContainer`.  Clicking either will open up a question modal where users can type in their question and choose a topic.

![](https://github.com/PriyaG88/query/blob/master/docs/screen-clippings/AskQuestionModal.png)

### Answers

Answers keep the conversation going as they provide insight into any discussion.  Answers belong to a question and because of that relationship, there isn't an index page for answers but you can see all the answers that have been submitted for a single question on a `QuestionView`.  Answers are submitted via a rich text editor configured with `react-quill`.

![](https://github.com/PriyaG88/query/blob/master/docs/screen-clippings/Screen%20Shot%202018-03-18%20at%206.01.50%20PM.png)

### Search

Users have the ability to search for questions that have already been asked by the community.
By first fetching questions from the PostgreSQL database, when users type in a string query, the query is used as the parameter to match against existing questions.

```javascript

matchResults() {
  this.resultsArr = [];

  if (this.state.searchTerm.length >= 2) {
    this.resultsArr = this.props.questions.filter(question => question.body.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
  }
}

```
