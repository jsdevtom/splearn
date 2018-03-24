import * as mongoose from 'mongoose'
const questionAnswerPairSchema = require('./question-answer-pair.schema')
let uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  firstName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  qapairs: [questionAnswerPairSchema]
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User
