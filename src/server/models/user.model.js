const { mongoose } = require('../imports')
var uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  firstName: String,
  email: {type: String, required: true},
  password: { type: String, required: true },
  questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}]
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User
