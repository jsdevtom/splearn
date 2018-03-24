import * as mongoose from 'mongoose'
const { nextAssessmentDate } = require('../helpers')

const questionAnswerPairSchema = new mongoose.Schema({
  question: String,
  correctAnswers: [String],
  wrongAnswers: [String],
  explanation: String,
  createdAt: { type: Date, default: new Date() },
  correctAttempts: { type: Number, default: 0 },
  wrongAttempts: { type: Number, default: 0 },
  netCorrectAttempts: { type: Number, default: 0 },
  lastAssessed: Date,
  toBeAssessedNext: Date
})

questionAnswerPairSchema.pre('save', function (next) {
  this.toBeAssessedNext = nextAssessmentDate(this.netCorrectAttempts, this.lastAssessed || this.createdAt)
  next()
})

module.exports = questionAnswerPairSchema
