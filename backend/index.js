import app from '/app'
import http from 'http'
import config from './util/config'
import logger from './util/logger'

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})