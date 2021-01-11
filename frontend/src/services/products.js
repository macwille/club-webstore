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

const remove = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`)
  return response.status
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, create, remove, update }