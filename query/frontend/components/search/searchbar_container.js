import { connect } from 'react-redux';
// import SearchBar from './searchbar';
import Search from './search_bar';
import { fetchQuestions } from '../../actions/question_actions';
import { questions } from '../../reducers/selectors';

const mapStateToProps = state => ({
  questions: questions(state)
});

const mapDispatchToState = dispatch =>({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToState)(Search);
