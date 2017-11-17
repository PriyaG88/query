import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  matchResults() {
    this.resultsArr = [];
    if (this.state.searchTerm) {
      this.resultsArr = this.props.questions.filter(question => question.body.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    }
  }

  render() {
    this.matchResults();
    const results = this.resultsArr.map(question => (
      <div>
       <Link to={`/questions/${question.id}`}
         key={question.id}
         className="search-item">{question.body}
       </Link>
     </div>
    ));
    return (
      <div className="search-bar-container">
        <div>
          <input type="text" className="search-input"
            value={this.state.searchTerm}
            placeholder="Search Query"
            onChange={this.update('searchTerm')}>
          </input>
        </div>
        <div className="search-results">
          <ul>{results}</ul>
        </div>
      </div>
    );
  }
}

export default Search;
