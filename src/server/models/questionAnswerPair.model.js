var mongoose = require('mongoose')

var questionAnswerPairSchema = mongoose.Schema({
  question: String,
  correctAnswers: [String],
  wrongAnswers: [String],
  createdAt: Date,
  attempts: [{
    date: Date,
    correct: Boolean
  }]
})

var QuestionAnswerPair = mongoose.model('QuestionAnswerPair', questionAnswerPairSchema)

module.exports = QuestionAnswerPair
