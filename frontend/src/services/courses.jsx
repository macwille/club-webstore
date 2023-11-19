import axios from 'axios'

const baseUrl = '/courses'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newCourse => {
  const response = await axios.post(baseUrl, newCourse)
  return response.data
}

const remove = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`)
  console.log('Remove course', response)
  return response
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, create, remove, update }