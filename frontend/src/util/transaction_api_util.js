import axios from 'axios';

export const getUserTransactions = id => {
  return axios.get(`/api/transactions/user/${id}`)
};

export const getCategoryTransactions = data => {
  let id = data[0];
  let category = data[1];
  return axios.get(`/api/transactions/user/${id}/${category}`)
}

export const writeTransaction = data => {
  return axios.post('/api/transactions/', data)
}