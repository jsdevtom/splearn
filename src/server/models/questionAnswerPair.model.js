const { mongoose } = require('../imports')
const User = require('../models/user.model')

const { nextAssessmentDate } = require('../helpers')

const questionAnswerPairSchema = mongoose.Schema({
  question: String,
  correctAnswers: [String],
  wrongAnswers: [String],
  explanation: String,
  createdAt: { type: Date, default: new Date() },
  correctAttempts: { type: Number, default: 0 },
  wrongAttempts: { type: Number, default: 0 },
  netCorrectAttempts: { type: Number, default: 0 },
  timesAssessed: { type: Number, default: 0 },
  lastAssessed: Date,
  toBeAssessedNext: Date,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

questionAnswerPairSchema.pre('save', function (next) {
  this.toBeAssessedNext = nextAssessmentDate(this.netCorrectAttempts, this.lastAssessed || this.createdAt)
  next()
})

questionAnswerPairSchema.post('remove', function (qapair) {
  User.findById(qapair.user)
    .then((user) => {
      user.messages.pull(qapair)
      user.save()
    })
    .catch((err) => console.error(err))
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

// For Debugging
// let newQAPair = new QuestionAnswerPair({})
// newQAPair.toBeAssessedNext

module.exports = QuestionAnswerPair
