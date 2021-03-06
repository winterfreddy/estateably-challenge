import { connect } from 'react-redux';
import { updateBalance } from '../../actions/session_actions';
import { addTransaction, fetchUserTransactions, searchTransactions } from '../../actions/transaction_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    transactions: Object.values(state.transactions),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTransactions: id => dispatch(fetchUserTransactions(id)),
    addTransaction: data => dispatch(addTransaction(data)),
    searchTransactions: data => dispatch(searchTransactions(data)),
    updateBalance: value => dispatch(updateBalance(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);