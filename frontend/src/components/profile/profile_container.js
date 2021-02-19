import { connect } from 'react-redux';
import { addTransaction, fetchUserTransactions, fetchCategoryTransactions } from '../../actions/transaction_actions';
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
    fetchCategoryTransactions: data => dispatch(fetchCategoryTransactions(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);