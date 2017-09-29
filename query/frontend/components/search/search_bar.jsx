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
    return (
      <div className="search-bar-container">
        <div>
          <textarea type="text" className="search-input"
            value={this.state.searchTerm}
            placeholder="Search Query"
            onChange={this.update('searchTerm')}>
          </textarea>
        </div>
        <div>
          {this.matchResults()}
          { this.resultsArr.map(question => (
            <li><Link key={question.id} to={`/questions/${question.id}`} >{question.body}</Link></li>
          )) }
        </div>
      </div>
    );
  }
}

export default Search;
