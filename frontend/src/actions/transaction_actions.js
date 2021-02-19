import { getUserTransactions, writeTransaction } from '../util/transaction_api_util';

export const RECEIVE_USER_TRANSACTIONS = "RECEIVE_USER_TRANSACTIONS";
export const RECEIVE_NEW_TRANSACTION = "RECEIVE_NEW_TRANSACTION";

export const receiveUserTransactions = transactions => ({
  type: RECEIVE_USER_TRANSACTIONS,
  transactions
});

export const receiveNewTransaction = transaction => ({
  type: RECEIVE_NEW_TRANSACTION,
  transaction
})

export const fetchUserTransactions = id => dispatch => (
  getUserTransactions(id)
    .then(transactions => dispatch(receiveUserTransactions(transactions)))
    .catch(err => console.log(err))
);

export const addTransaction = data => dispatch => (
  writeTransaction(data)
    .then(transaction => dispatch(receiveNewTransaction(transaction)))
    .catch(err => console.log(err))
);