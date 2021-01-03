import axios from 'axios'
import { API_URL } from '../config'

const baseUrl = API_URL + '/users'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newUser => {
  const response = await axios.post(baseUrl, newUser)
  return response.data
}

export default { getAll, create }