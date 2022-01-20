const dotenv = require('dotenv')
const fs = require('fs')

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' })
}

const MONGODB_URI = process.env['MONGODB_URI'] || 'Höpöhöpö'
const PORT = process.env.PORT || 3001
const SECRET = process.env.SECRET || 'No secret'

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET
}
