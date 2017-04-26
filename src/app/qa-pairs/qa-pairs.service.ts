import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QaPairsService {
  public qapairs = []
  public qapairsToBeAssessed = []
  public qapairsChanged: EventEmitter<any[]> = new EventEmitter()
  private headers = new Headers({'Content-Type': 'application/json'})
  private qapairsUrl = 'api/qapairs'

  constructor(private http: Http) { }
  
  /**
   * Get QA Pairs from the server. 
   * Also initiates this.qapairs and this.qapairsToBeAssessed
   */
  getQAPairs () {
    const jwt = localStorage.getItem('jwt') ? `?jwt=${localStorage.getItem('jwt')}` : ''
    return this.http.get(this.qapairsUrl + jwt)
      .map(response => {
        this.qapairs = response.json()
        return this.qapairs
      })
  }

  getNthQuestion (n) {
    const jwt = localStorage.getItem('jwt') ? `?jwt=${localStorage.getItem('jwt')}` : ''
    // n is 0 based
    return this.http.get(`${this.qapairsUrl}/question/${n}${jwt}`)
      .map(response => response.json())
  }

  getQAPairstoBeAssessed () {
    return this.getQAPairs()
      .map(response => {
        let qapairsToBeAssessed = this.qapairs.filter((qapair) => {
          return new Date(qapair.toBeAssessedNext).getTime() < new Date().getTime()
        })
        //
        this.qapairsToBeAssessed.splice(0, this.qapairsToBeAssessed.length)
        this.qapairsToBeAssessed.push.apply(this.qapairsToBeAssessed, qapairsToBeAssessed)
        return this.qapairsToBeAssessed
      })
  }

  newQAPair (formValue) {
    const jwt = localStorage.getItem('jwt') ? `?jwt=${localStorage.getItem('jwt')}` : ''
    return this.http.post(this.qapairsUrl + jwt, {
      question: formValue.question,
      correctAnswers: formValue.correctAnswers,
      wrongAnswers: formValue.wrongAnswers,
      explanation: formValue.explanation,
      createdAt: new Date()
    }, this.headers)
      .map(response => {
        return response.json()
      })
      .subscribe((data) => {
        this.qapairs.push(data)
        this.qapairsChanged.emit(this.qapairs)
      })
  }

  updateQAPair (qapairID: string, formValue) {
    const jwt = localStorage.getItem('jwt') ? `?jwt=${localStorage.getItem('jwt')}` : ''
    return this.http.put(`${this.qapairsUrl}/${qapairID}${jwt}`, formValue)
      .map(response => {
        return response.json()
      })
      .subscribe((data) => {
        this.qapairs.splice(this.qapairs.findIndex((element) => element._id === qapairID), 1, data)
        this.qapairsChanged.emit(this.qapairs)
      })
  }

  deleteQAPair (id) {
    const jwt = localStorage.getItem('jwt') ? `?jwt=${localStorage.getItem('jwt')}` : ''
    return this.http.delete(`${this.qapairsUrl}/${id}${jwt}`)
      .map(response => {
        return response.json()
      })
      .subscribe(() => {
        this.qapairs.splice(this.qapairs.findIndex((element) => element._id === id), 1)
        this.qapairsChanged.emit(this.qapairs)
      })
  }

  isCorrectAnswer (id, answer) {
    const jwt = localStorage.getItem('jwt') ? `?jwt=${localStorage.getItem('jwt')}` : ''
    return this.http.post(`${this.qapairsUrl}/is_correct${jwt}`, {id, answer}, this.headers)
      .map(response => {
        this.qapairs = response.json().qaPairs
        this.qapairsChanged.emit(this.qapairs)
        return response.json()
      })
  }
}
