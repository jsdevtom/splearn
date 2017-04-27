import * as moment from 'moment';

export interface IQAPair {
  question: string,
  correctAnswers: [string],
  wrongAnswers: [string],
  _id?: string,
  explanation?: string,
  createdAt?: Date,
  correctAttempts?: number,
  wrongAttempts?: number,
  netCorrectAttempts?: number,
  lastAssessed?: Date,
  toBeAssessedNext?: Date
}

export default class QAPair implements IQAPair {
  public question: string
  public correctAnswers: [string]
  public wrongAnswers: [string]
  public _id?: string
  public explanation?: string
  public createdAt?: Date
  public correctAttempts?: number
  public wrongAttempts?: number
  public netCorrectAttempts?: number
  public lastAssessed?: Date
  public toBeAssessedNext?: Date

  constructor(obj: IQAPair) {
    this.question = obj.question
    this.correctAnswers = obj.correctAnswers
    this.wrongAnswers = obj.wrongAnswers
    this._id = obj._id
    this.explanation = obj.explanation
    this.createdAt = obj.createdAt
    this.correctAttempts = obj.correctAttempts
    this.wrongAttempts = obj.wrongAttempts
    this.netCorrectAttempts = obj.netCorrectAttempts
    this.lastAssessed = obj.lastAssessed
    this.toBeAssessedNext = obj.toBeAssessedNext
  }

  get toBeAssessedInTime () {
    return this.toBeAssessedNext ? moment(this.toBeAssessedNext).fromNow() : 'Soon'
  }
}