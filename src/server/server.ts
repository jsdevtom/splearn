import * as mongoose from 'mongoose'
import {config} from 'dotenv'
import * as express from 'express'
import {logger} from './logger/logger'
import {handleMongoError} from './error/handle-mongo-error'
import {assignRoutesToApp} from './routes/assign-routes-to-app'
import {initMiddleWare} from './init-middle-ware'
import {connectToMongo} from './connect-to-mongo'

config()

const app = express()

app.set('port', (process.env.PORT || 3001))

initMiddleWare(app)

connectToMongo()

const db = mongoose.connection

logger.info('Server running', { context: 'server.ts' })

db.on('error', handleMongoError)

db.once('open', () => {
  console.log('Connected to MongoDB')

  assignRoutesToApp(app)

  app.listen(app.get('port'), () => {
    console.log(`Splearn server listening on port ${app.get('port')}`)
  })
})

module.exports = app
