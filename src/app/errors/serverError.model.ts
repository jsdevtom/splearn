export class ServerError {
  errorMessage: string

  constructor (
    public title: string,
    errorMessage: string | {errorMessage: string}
  ) {
    if (typeof errorMessage === 'string') {
      this.errorMessage = errorMessage
    } else {
      this.errorMessage = errorMessage.errorMessage
    }
  }
}