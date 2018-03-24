import {logger} from '../logger/logger'

export function handleMongoError(err: string) {
  logger.error(`There was an error connecting to Mongo ${err}`, {context: 'server.ts'})
}
