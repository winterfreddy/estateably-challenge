import axios from 'axios';

export const getUserTransactions = id => {
  return axios.get(`/api/transactions/user/${id}`)
};

export const getSearchTransactions = data => {
  let id = data[0];
  let description = data[1];
  return axios.get(`/api/transactions/user/${id}/${description}`)
}

export const writeTransaction = data => {
  return axios.post('/api/transactions/', data)
}