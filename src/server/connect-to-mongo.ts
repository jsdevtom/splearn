import * as mongoose from 'mongoose'
import {handleMongoError} from './error/handle-mongo-error'

export function connectToMongo() {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.connect('mongodb://localhost:27017/quiz')
            .catch(handleMongoError)
  } else {
    mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds127731.mlab.com:27731/splearn`)
            .catch(handleMongoError)
  }
}
