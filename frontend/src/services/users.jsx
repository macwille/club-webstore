import axios from 'axios'

const baseUrl = '/users'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newUser => {
  const response = await axios.post(baseUrl, newUser)
  return response.data
}

const get = async id => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const remove = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`)
  return response.status
}

const update = (id, newObject) => {
  console.log('update', id, newObject)
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, get, create, remove, update }