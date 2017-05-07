import { Injectable, EventEmitter } from '@angular/core';

import { ServerError } from "app/errors/serverError.model";

@Injectable()
export class ErrorsService {
  public errorOccurred = new EventEmitter<ServerError>()

  constructor() { }

  handleError(error: any) {
    const errorData = new ServerError(error.title, error.error)
    this.errorOccurred.emit(errorData)
  }

}
