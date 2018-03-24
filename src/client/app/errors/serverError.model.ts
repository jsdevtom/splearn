export class ServerError {
  errorMessage: string

  constructor (
    public title: string,
    errorMessage: string | {errorMessage: string}
  ) {
    if (typeof errorMessage === 'string') {
      this.errorMessage = errorMessage
    } else if (typeof errorMessage === 'object') {
      this.errorMessage = errorMessage.errorMessage
    } else {
      this.errorMessage = 'There was an error.'
    }
  }
}
