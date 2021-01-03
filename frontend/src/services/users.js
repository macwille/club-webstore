import axios from 'axios'
import { API_URL } from '../config'

const baseUrl = API_URL + '/users'

const getAll = () => {
  console.log('user service get all')
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }