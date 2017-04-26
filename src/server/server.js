const express = require('express')
const path = require('path')
const morgan = require('morgan') // logger
const bodyParser = require('body-parser')
require('dotenv').config()

const apiRoutes = require('./routes/api.routes')
const userRoutes = require('./routes/user.routes')

const app = express()
app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(path.join(__dirname, '/../../dist')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('dev'))

const { mongoose } = require('./imports')
mongoose.connect('mongodb://localhost:27017/quiz')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to MongoDB')

  // Routes
  app.use('/api', apiRoutes)
  app.use('/user', userRoutes)

  // all other routes are handled by Angular
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../../dist/index.html'))
  })

  app.listen(app.get('port'), function () {
    console.log('Angular 2 Full Stack listening on port ' + app.get('port'))
  })
})

module.exports = app
