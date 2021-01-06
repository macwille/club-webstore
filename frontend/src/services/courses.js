import axios from 'axios'
import { API_URL } from '../config'

const baseUrl = API_URL + '/courses'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newCourse => {
  const response = await axios.post(baseUrl, newCourse)
  return response.data
}

const remove = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req.then(console.log('course deleted'))
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, create, remove, update }