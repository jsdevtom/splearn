import * as winston from 'winston'
import * as mongoose from 'mongoose'
import * as compression from 'compression'
import * as helmet from 'helmet'
import { config } from 'dotenv'
import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as path from 'path'

config()

import apiRoutes from './routes/api.routes'
import userRoutes from './routes/user.routes'

const app = express()
app.set('port', (process.env.PORT || 3001))
app.use(helmet())
app.use(compression({ threshold: 0 }))
app.use('/', express.static(path.join(__dirname, '/../../dist/client'), { maxAge: 86400000 }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (process.env.NODE_ENV !== 'production') {
  mongoose.connect('mongodb://localhost:27017/quiz')
} else {
  mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds127731.mlab.com:27731/splearn`)
}

const db = mongoose.connection

winston.info('starting server')

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to MongoDB')

  // Routes
  app.use('/api', apiRoutes)
  app.use('/user', userRoutes)

  // all other routes are handled by Angular
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../../dist/client/index.html'))
  })

  app.listen(app.get('port'), function () {
    console.log('Angular 2 Full Stack listening on port ' + app.get('port'))
  })
})

module.exports = app
