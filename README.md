# Query

[Query Live](https://query-webapp.herokuapp.com/#/enter)


Query is a full-stack application, inspired by Quora, which allows users to ask and answer other user-generated questions.  The technology used for the application includes Rails for the backend, React/Redux on the frontend and PostgresQL as the database.

## Features

### Questions

Questions are the foundation of Query as they stimulate conversation and user engagement.  The `QuestionIndexContainer` component is loaded upon successful user login (or signup) via an AJAX get request and all questions are also loaded into the application state via redux.  

![](https://github.com/PriyaG88/query/blob/master/docs/screen-clippings/QuestionIndexContainer.png)

Users are able to ask questions via the Ask Question button on the navigation or through the prompt right about the `QuestionIndexContainer`.  Clicking either will open up a question modal where users can type in their question and choose a topic.

![](https://github.com/PriyaG88/query/blob/master/docs/screen-clippings/QuestionModal.png)
