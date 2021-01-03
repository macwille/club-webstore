require('dotenv').config()

let API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'
let MONGODB_URI = process.env.MONGODB_URI
let PORT = process.env.PORT

module.exports = {
  API_URL,
  MONGODB_URI,
  PORT
}