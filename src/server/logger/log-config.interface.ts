import { NPMLoggingLevel } from 'winston'

export interface LogConfig {
  timestamp: number
  level: NPMLoggingLevel
  message: string
  context: string
}
