const { mongoose } = require('../imports')

const { nextAssessmentDate } = require('../helpers')

const questionAnswerPairSchema = mongoose.Schema({
  question: String,
  correctAnswers: [String],
  wrongAnswers: [String],
  explanation: String,
  createdAt: { type: Date, default: new Date() },
  correctAttempts: { type: Number, default: 0 },
  wrongAttempts: { type: Number, default: 0 },
  timesAssessed: { type: Number, default: 0 },
  lastAssessed: Date,
  toBeAssessedNext: Date
})

questionAnswerPairSchema.pre('save', function (next) {
  let netCorrect = this.correctAttempts - this.wrongAttempts
  this.toBeAssessedNext = nextAssessmentDate(netCorrect, this.lastAssessed || this.createdAt)
  next()
})

/* MADE OBSELETE BY helpers.js.attemptAnswer */

// questionAnswerPairSchema.pre('update', function (next) {
//   let netCorrect = this.correctAttempts - this.wrongAttempts
//   this.update({}, {
//     $set: {
//       toBeAssessedNext: nextAssessmentDate(netCorrect, this.lastAssessed || this.createdAt)
//     }
//   })
//   next()
// })

var QuestionAnswerPair = mongoose.model('QuestionAnswerPair', questionAnswerPairSchema)

let newQAPair = new QuestionAnswerPair({})
newQAPair.toBeAssessedNext

module.exports = QuestionAnswerPair
