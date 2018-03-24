import apiRoutes from './api.routes'
import userRoutes from './user.routes'
import {Express} from 'express'
import * as path from "path"

function allowClientToHandleAllOtherRoutes(app: Express) {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../../dist/client/index.html'))
  })
}

export function assignRoutesToApp (app: Express) {
  app.use('/api', apiRoutes)
  app.use('/user', userRoutes)

  allowClientToHandleAllOtherRoutes(app)
}
