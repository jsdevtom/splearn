/* eslint-env mocha */

const { mongoose } = require('../src/server/imports')
mongoose.connect('mongodb://localhost:27017/quiz_test')

before((done) => {
  mongoose.connection
  .once('open', () => done())
  .on('error', (error) => {
    console.warn('Warning', error)
  })
})

beforeEach((done) => {
  mongoose.connection.collections.questionanswerpairs.drop(() => done())
})
