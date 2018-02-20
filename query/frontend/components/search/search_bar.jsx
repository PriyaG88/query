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

  renderResults() {
    return this.resultsArr.map(question => (
     <Link to={`/questions/${question.id}`}
       key={question.id}
       className="search-item">{question.body}
     </Link>
    ));
  }

  handleSelect() {
    this.setState({
      searchTerm: ""
    });
  }

  render() {
    this.matchResults();

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
          <ul onClick={this.handleSelect.bind(this)}>{this.renderResults()}</ul>
        </div>
      </div>
    );
  }
}

export default Search;
