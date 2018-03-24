import { LoggerInstance } from 'winston'
import { LogConfig } from './log-config.interface'
const { createLogger, format, transports, config } = require('winston')
const { combine, timestamp, printf, colorize } = format

const standardFormat = combine(
  colorize(),
  timestamp(),
  printf((info: LogConfig) => {
    return `${info.timestamp} [${info.context}] ${info.level}: ${info.message}`
  })
)


const logger: LoggerInstance = createLogger({
  levels: config.npm.levels,
  format: standardFormat,
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console())
}

export { logger }
