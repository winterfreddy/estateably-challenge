import { RECEIVE_USER_TRANSACTIONS, RECEIVE_NEW_TRANSACTION } from '../actions/transaction_actions';
  
const TransactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state };
    switch(action.type) {
        case RECEIVE_USER_TRANSACTIONS:
            const userTransactionData = {};
            action.transactions.data.forEach( data => {
                userTransactionData[data._id] = data
            });
            return userTransactionData;
        case RECEIVE_NEW_TRANSACTION:
            newState.new = action.transaction.data
            return newState;
        default:
            return state;
    }
};
  
  export default TransactionsReducer;