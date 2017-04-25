import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QaPairsService {
  public qapairs = []
  public qapairsToBeAssessed = []
  public qapairsChanged = new EventEmitter()
  private headers = new Headers({'Content-Type': 'application/json'});
  private qapairsUrl = 'api/qapairs'

  constructor(private http: Http) { }
  
  /**
   * Get QA Pairs from the server. 
   * Also initiates this.qapairs and this.qapairsToBeAssessed
   */
  getQAPairs () {
    return this.http.get(this.qapairsUrl)
      .map(response => {
        this.qapairs = response.json()
        return this.qapairs
      })
  }

  getNthQuestion (n) {
    // n is 0 based
    return this.http.get(`${this.qapairsUrl}/question/${n}`)
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
    return this.http.post(this.qapairsUrl, {
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
    return this.http.put(`${this.qapairsUrl}/${qapairID}`, formValue)
      .map(response => {
        return response.json()
      })
      .subscribe((data) => {
        this.qapairs.splice(this.qapairs.findIndex((element) => element._id === qapairID), 1, data)
        this.qapairsChanged.emit(this.qapairs)
      })
  }

  deleteQAPair (id) {
    return this.http.delete(`${this.qapairsUrl}/${id}`)
      .map(response => {
        return response.json()
      })
      .subscribe(() => {
        this.qapairs.splice(this.qapairs.findIndex((element) => element._id === id), 1)
        this.qapairsChanged.emit(this.qapairs)
      })
  }

  isCorrectAnswer (id, answer) {
    return this.http.post(`${this.qapairsUrl}/is_correct`, {id, answer}, this.headers)
      .map(response => {
        this.qapairs = response.json().qaPairs
        this.qapairsChanged.emit(this.qapairs)
        return response.json()
      })
  }
}
