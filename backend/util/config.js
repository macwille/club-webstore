require('dotenv').config()

let API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'
let PORT = process.env.PORT

module.exports = {
  API_URL,
  PORT
}