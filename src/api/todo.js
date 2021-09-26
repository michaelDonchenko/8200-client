import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export const getTodos = async () => await axios.get(`${server_url}/user-todos`)

export const createTodo = async (text) =>
  await axios.post(`${server_url}/create`, { text })

export const removeTodo = async (id) =>
  await axios.delete(`${server_url}/remove/${id}`)

export const checkTodo = async (id) =>
  await axios.put(`${server_url}/check/${id}`)

export const uncheckTodo = async (id) =>
  await axios.put(`${server_url}/uncheck/${id}`)
