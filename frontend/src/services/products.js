import axios from 'axios'
import { API_URL } from '../config'

const baseUrl = API_URL + '/products'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newProduct => {
  const response = await axios.post(baseUrl, newProduct)
  return response.data
}

export default { getAll, create }