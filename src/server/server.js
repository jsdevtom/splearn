const express = require('express')
const path = require('path')
const morgan = require('morgan') // logger
const bodyParser = require('body-parser')
const apiRoutes = require('./api.routes')

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

  // // APIs
  app.use('/api', apiRoutes)

  // all other routes are handled by Angular
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../../dist/index.html'))
  })

  app.listen(app.get('port'), function () {
    console.log('Angular 2 Full Stack listening on port ' + app.get('port'))
  })
})

module.exports = app
