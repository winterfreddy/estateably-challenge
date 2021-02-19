import axios from 'axios';

export const getUserTransactions = id => {
  return axios.get(`/api/transactions/user/${id}`)
};

export const writeTransaction = data => {
  return axios.post('/api/transactions/', data)
}