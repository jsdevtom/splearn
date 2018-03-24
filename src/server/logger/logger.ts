import { LoggerInstance } from 'winston'
import { LogConfig } from './LogConfig'
const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format

const standardFormat = printf((info: LogConfig) => {
  return `${info.timestamp} [${info.context}] ${info.level}: ${info.message}`
})

const logger: LoggerInstance = createLogger({
  level: 'info',
  format: combine(
      label({ label: 'right meow!' }),
      timestamp(),
      standardFormat
  ),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: standardFormat
  }))
}

export { logger }
