/* eslint-env mocha */

const assert = require('assert')
const QuestionAnswerPair = require('../src/server/models/questionAnswerPair.model')

describe('Creating records', function () {
  it('saves a question', function (done) {
    const qapair1 = new QuestionAnswerPair({
      question: 'Why?',
      correctAnswers: ['yolo']
    })
    qapair1.save()
      .then((doc) => {
        assert(!doc.isNew)
        done()
      })
      .catch((err) => {
        assert(false, err)
        done()
      })
  })
  it('creates a `toBeAssessedNext` property on the document', function (done) {
    const qapair1 = new QuestionAnswerPair({
      question: 'Why?',
      correctAnswers: ['yolo']
    })
    qapair1.save()
      .then((doc) => {
        assert(doc.toBeAssessedNext)
        done()
      })
      .catch((err) => {
        assert(false, err)
        done()
      })
  })
  it('sets `toBeAssessedNext` to be 5 seconds after `createdAt`', function (done) {
    const qapair1 = new QuestionAnswerPair({
      question: 'Why?',
      correctAnswers: ['yolo']
    })
    qapair1.save()
      .then((doc) => {
        assert(doc.toBeAssessedNext.getTime() === doc.createdAt.getTime() + 5000)
        done()
      })
      .catch((err) => {
        assert(false, err)
        done()
      })
  })
})
