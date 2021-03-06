import { connect } from 'react-redux';
import NavBar from './navbar.jsx';
import { logout } from '../../actions/session_actions';
import { createQuestion } from '../../actions/question_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
