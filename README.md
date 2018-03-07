# Query

[Query Live](https://query-webapp.herokuapp.com/#/enter)


Query is a full-stack application, inspired by Quora, which allows users to ask and answer other user-generated questions.  The technology used for the application includes Rails for the backend, React/Redux on the frontend and PostgresQL as the database.

## Features

### Questions

Questions are the foundation of Query as they stimulate conversation and user engagement.  The `QuestionIndexContainer` component is loaded upon successful user login (or signup) via an AJAX get request and all questions are also loaded into the application state via redux.  
