const express = require('express')
const path = require('path')
const morgan = require('morgan') // logger
const bodyParser = require('body-parser')
const { levenshtein } = require('./helpers')

const app = express()
app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(path.join(__dirname, '/../../dist')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('dev'))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/quiz')
const db = mongoose.connection
mongoose.Promise = global.Promise

// Models
const QuestionAnswerPair = require('./models/questionAnswerPair.model')

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to MongoDB')

  // // APIs
  // // select all
  app.get('/api/qapairs', function (req, res) {
    QuestionAnswerPair.find()
      .then((docs) => {
        res.json(docs)
      })
      .catch((err) => console.error(err))
  })

  // find nth question
  app.get('/api/qapairs/question/:n', function (req, res) {
    QuestionAnswerPair.findOne({}, 'question _id', { skip: +req.params.n })
      .then((doc) => {
        res.json(doc)
      })
      .catch((err) => console.error(err))
  })

  // create
  app.post('/api/qapairs', function (req, res) {
    let obj = new QuestionAnswerPair(req.body)
    obj.save()
      .then((obj) => {
        res.status(200).json(obj)
      })
      .catch((err) => console.error(err))
  })

  // check if answer is correct
  app.post('/api/qapairs/isCorrect', function (req, res) {
    QuestionAnswerPair.findById(req.body.id)
      .then((obj) => {
        const correctAnswers = obj.correctAnswers
        const wrongAnswers = obj.wrongAnswers
        for (let i = 0; i < correctAnswers.length; i++) {
          let correctAnswer = correctAnswers[i]

          //  If the submitted answer is the same as the correctAnswer but also not in the wrong answer array
          //  then send back isTrue. Example:
          //    Question: Affect or Effect?
          //    Answers:  How does the budget ______ people?
          //
          //    levenshtein('effect', 'affect') / 'effect'.length would return 0.167 here which would pass
          //    thus !wrongAnswers.includes('affect') is needed to overcome this.
          if ((levenshtein(correctAnswer, req.body.answer) / correctAnswer.length) <= 0.25 &&
          !wrongAnswers.includes(req.body.answer)) {
            return res.status(200).json({isTrue: true})
          }
        }
        return res.status(200).json({isTrue: false})
      })
      .catch((err) => console.error(err))
  })

  // update by id
  app.put('/api/qapairs/:id', function (req, res) {
    QuestionAnswerPair.findById(req.params.id)
      .then((obj) => {
        obj.question = req.body.question
        obj.correctAnswers = req.body.correctAnswers
        obj.wrongAnswers = req.body.wrongAnswers
        return obj.save()
      })
      .then((obj) => res.status(200).json(obj))
      .catch((err) => console.error(err))
  })

  // delete by id
  app.delete('/api/qapairs/:id', function (req, res) {
    QuestionAnswerPair.findByIdAndRemove(req.params.id)
      .then((deletedObj) => {
        res.status(200).json(deletedObj)
      })
      .catch((err) => console.error(err))
  })

  // all other routes are handled by Angular
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../../dist/index.html'))
  })

  app.listen(app.get('port'), function () {
    console.log('Angular 2 Full Stack listening on port ' + app.get('port'))
  })
})

module.exports = app
