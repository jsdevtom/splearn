import * as helmet from 'helmet'
import * as express from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import {Express} from 'express'

export function initMiddleWare(app: Express) {
  app.use(helmet())
  app.use(compression({threshold: 0}))
  app.use('/', express.static(path.join(__dirname, '/../../dist/client'), {maxAge: 86400000}))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}))
}
