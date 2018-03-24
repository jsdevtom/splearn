import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import QAPair, { IQAPair } from './qa-pair.model'
import { ErrorsService } from 'app/errors/errors.service'

@Injectable()
export class QaPairsService {
  public qapairs: QAPair[] = []
  public qapairsToBeAssessed = []
  public qapairsChanged: EventEmitter<any[]> = new EventEmitter()
  private qapairsUrl = 'api/qapairs'

  get requestOptions () {
    return (
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', jwt: this.jwtInLS })
      }
    )
  }

  get jwtInLS () {
    return localStorage.getItem('jwt') || ''
  }

  constructor (private http: HttpClient, private errorsService: ErrorsService) {}

  getQAPairs () {
    return this.http.get<Array<QAPair>>(this.qapairsUrl, this.requestOptions)
      .map((response) => {
        this.qapairs = response.map((qapair: IQAPair) => new QAPair(qapair))
        this.qapairsChanged.emit(this.qapairs) // So that the nav bar gets wind of the qapairs, after initializing without being logged in.
        return this.qapairs
      })
      .catch(
        (error: any) => {
          this.errorsService.handleError(error)
          return Observable.throw(error)
        }
      )
  }

  getQAPairstoBeAssessed () {
    return this.getQAPairs()
      .map(response => {
        let qapairsToBeAssessed = this.qapairs.filter((qapair) => {
          return new Date(qapair.toBeAssessedNext).getTime() < new Date().getTime()
        })

        this.qapairsToBeAssessed.splice(0, this.qapairsToBeAssessed.length)
        this.qapairsToBeAssessed.push.apply(this.qapairsToBeAssessed, qapairsToBeAssessed)
        this.qapairsChanged.emit(this.qapairs)
        return this.qapairsToBeAssessed
      })
      .catch(
        (error: any) => {
          this.errorsService.handleError(error)
          return Observable.throw(error)
        }
      )
  }

  newQAPair (formValue) {
    return this.http.post(this.qapairsUrl, {
        question: formValue.question,
        correctAnswers: formValue.correctAnswers,
        wrongAnswers: formValue.wrongAnswers,
        explanation: formValue.explanation,
        createdAt: new Date()
      }, this.requestOptions)
      .subscribe(
        (qapair: IQAPair) => {
          this.qapairs.push(new QAPair(qapair))
          this.qapairsChanged.emit(this.qapairs)
        },
        (error: any): Observable<Error> => {
          this.errorsService.handleError(error)
          return Observable.throw(error)
        }
      )
  }

  updateQAPair (qapairID: string, formValue) {
    return this.http.put<any>(`${this.qapairsUrl}/${qapairID}`, formValue, this.requestOptions)
      .subscribe(
        (data) => {
          this.qapairs.splice(this.qapairs.findIndex((element) => element._id === qapairID), 1, data)
          this.qapairs.map((qapair: IQAPair) => new QAPair(qapair))
          this.qapairsChanged.emit(this.qapairs)
        },
        (error: any): Observable<Error> => {
          this.errorsService.handleError(error)
          return Observable.throw(error)
        }
      )
  }

  deleteQAPair (id) {
    return this.http.delete(`${this.qapairsUrl}/${id}`)
      .subscribe(
        () => {
          this.qapairs.splice(this.qapairs.findIndex((element) => element._id === id), 1)
          this.qapairs.map((qapair: IQAPair) => new QAPair(qapair))
          this.qapairsChanged.emit(this.qapairs)
        },
        (error: any): Observable<Error> => {
          this.errorsService.handleError(error)
          return Observable.throw(error)
        }
      )
  }

  isCorrectAnswer (id, answer) {
    return this.http.post<{qaPairs: any}>(`${this.qapairsUrl}/is_correct`, {id, answer}, this.requestOptions)
      .map(response => {
        this.qapairs = response.qaPairs.map((qapair: IQAPair) => new QAPair(qapair))
        this.qapairsChanged.emit(this.qapairs)
        return response
      })
      .catch(
        (error: any) => {
          this.errorsService.handleError(error)
          return Observable.throw(error)
        }
      )
  }
}
