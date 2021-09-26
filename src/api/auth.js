import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export const register = async (values) =>
  await axios.post(`${server_url}/register`, values)

export const login = async (values) =>
  await axios.post(`${server_url}/login`, values)

export const logout = async () => await axios.get(`${server_url}/logout`)

export const checkToken = async () =>
  await axios.get(`${server_url}/check-token`)
