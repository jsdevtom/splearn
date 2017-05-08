const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { levenshtein, attemptAnswer } = require('../helpers')
const User = require('../models/user.model')

router.use('/', (req, res, next) => {
  console.log(req.headers.jwt)
  jwt.verify(req.headers.jwt, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({title: 'Not authenticated', error: 'Not authenticated. Please log in.'})
    req.body.decodedUserID = jwt.decode(req.headers.jwt).user
    next()
  })
})

// select all
router.get('/qapairs', function (req, res) {
  User.findById(req.body.decodedUserID)
    .then((foundUser) => {
      res.json(foundUser.qapairs)
    })
    .catch((err) => res.status(500).json({title: 'An error occured', error: err}))
})

// create
router.post('/qapairs', function (req, res) {
  let newQaPair
  User.findById(req.body.decodedUserID)
    .then(foundUser => {
      newQaPair = foundUser.qapairs.create({
        question: req.body.question,
        correctAnswers: req.body.correctAnswers,
        wrongAnswers: req.body.wrongAnswers,
        explanation: req.body.explanation,
        createdAt: req.body.createdAt
      })
      foundUser.qapairs.push(newQaPair)
      return foundUser.save()
    })
    .then((result) => {
      res.status(201).json(newQaPair)
    })
    .catch((err) => res.status(500).json({title: 'An error occured', error: err}))
})

// check if answer is correct then return `{ qaPairs, isCorrect }`
router.post('/qapairs/is_correct', function (req, res) {
  let isCorrect

  User.findById(req.body.decodedUserID)
    .then(foundUser => {
      const qapair = foundUser.qapairs.id(req.body.id)
      const { correctAnswers, wrongAnswers } = qapair
      function onDeterminedIfCorrect (wasItCorrect) {
        isCorrect = wasItCorrect
        attemptAnswer(qapair, isCorrect)
        return foundUser.save()
      }

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
          return onDeterminedIfCorrect(true)
        }
        return onDeterminedIfCorrect(false)
      }
    })
    .then((updatedUser) => res.status(200).json({ qaPairs: updatedUser.qapairs, isCorrect }))
    .catch((err) => res.status(500).json({title: 'An error occured', error: err}))
})

// update by id
router.put('/qapairs/:id', function (req, res) {
  let qapair
  User.findById(req.body.decodedUserID)
    .then(foundUser => {
      qapair = foundUser.qapairs.id(req.params.id)
      qapair.question = req.body.question
      qapair.correctAnswers = req.body.correctAnswers
      qapair.wrongAnswers = req.body.wrongAnswers
      qapair.explanation = req.body.explanation
      return foundUser.save()
    })
    .then((updatedUser) => res.status(200).json(qapair))
    .catch((err) => res.status(500).json({title: 'An error occured', error: err}))
})

// delete by id
router.delete('/qapairs/:id', function (req, res) {
  let qapair
  User.findById(req.body.decodedUserID)
    .then(foundUser => {
      qapair = foundUser.qapairs.id(req.params.id)
      qapair.remove()
      return foundUser.save()
    })
    .then((deletedObj) => {
      res.status(200).json(qapair)
    })
    .catch((err) => res.status(500).json({title: 'An error occured', error: err}))
})

module.exports = router
