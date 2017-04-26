const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { levenshtein, attemptAnswer } = require('../helpers')
// Models
const QuestionAnswerPair = require('../models/questionAnswerPair.model')
const User = require('../models/user.model')

router.use('/', (req, res, next) => {
  jwt.verify(req.query.jwt, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json(err)
    next()
  })
})

// select all
router.get('/qapairs', function (req, res) {
  QuestionAnswerPair.find()
    .then((docs) => {
      res.json(docs)
    })
    .catch((err) => console.error(err))
})

// find nth question
router.get('/qapairs/question/:n', function (req, res) {
  QuestionAnswerPair.findOne({}, 'question _id', { skip: +req.params.n })
    .then((doc) => {
      res.json(doc)
    })
    .catch((err) => console.error(err))
})

// currently obselete; logic in front end because the front end needs to get the all the answers on page load anyway.
// get the answers to be reviewed
router.get('/qapairs/due-to-be-reviewed', function (req, res) {
  QuestionAnswerPair.find({
    toBeAssessedNext: { $lte: new Date() }
  })
    .then((doc) => {
      res.json(doc.length)
    })
    .catch((err) => console.error(err))
})

// create
router.post('/qapairs', function (req, res) {
  const decodedUser = jwt.decode(req.query.jwt).user
  let user
  User.findById(decodedUser._id)
    .then(foundUser => {
      user = foundUser
      req.body.user = foundUser._id
      let qapair = new QuestionAnswerPair(req.body)
      return qapair.save()
    })
    .then((result) => {
      user.qapairs.push(result._id)
      user.save()
      res.status(201).json(result)
    })
    .catch((err) => res.status(500).json(err))
})

// check if answer is correct
router.post('/qapairs/is_correct', function (req, res) {
  let isCorrect

  QuestionAnswerPair.findById(req.body.id)
    .then((obj) => {
      const correctAnswers = obj.correctAnswers
      const wrongAnswers = obj.wrongAnswers
      for (let i = 0; i < correctAnswers.length; i++) {
        let correctAnswer = correctAnswers[i]

        /*
            If the submitted answer is the same as the correctAnswer but also not in the wrong answer array then send back isTrue. Example:
              Question: Affect or Effect?
              Answers:  How does the budget ______ people?

              levenshtein('effect', 'affect') / 'effect'.length would return 0.167 here which would pass
              thus !wrongAnswers.includes('affect') is needed to exclude 'affect' as a correct answer.
        */
        if ((levenshtein(correctAnswer, req.body.answer) / correctAnswer.length) <= 0.25 &&
          !wrongAnswers.includes(req.body.answer)) {
          isCorrect = true
          return attemptAnswer(obj, QuestionAnswerPair, isCorrect)
        }
      }
      isCorrect = false
      return attemptAnswer(obj, QuestionAnswerPair, isCorrect)
    })
    .then((updateResult) => QuestionAnswerPair.find({}))
    .then((qaPairs) => {
      return res.status(200).json({ qaPairs, isCorrect })
    })
    .catch((err) => console.error(err))
})

// update by id
router.put('/qapairs/:id', function (req, res) {
  QuestionAnswerPair.findById(req.params.id)
    .then((obj) => {
      obj.question = req.body.question
      obj.correctAnswers = req.body.correctAnswers
      obj.wrongAnswers = req.body.wrongAnswers
      obj.explanation = req.body.explanation
      return obj.save()
    })
    .then((obj) => res.status(200).json(obj))
    .catch((err) => console.error(err))
})

// delete by id
router.delete('/qapairs/:id', function (req, res) {
  QuestionAnswerPair.findByIdAndRemove(req.params.id)
    .then((deletedObj) => {
      res.status(200).json(deletedObj)
    })
    .catch((err) => console.error(err))
})

module.exports = router
