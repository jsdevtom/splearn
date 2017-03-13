import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QaPairsService {
  public qapairs =[]
  private headers = new Headers({'Content-Type': 'application/json'});
  private qapairsUrl = 'api/qapairs'
  private qapairsChanged = new EventEmitter()

  constructor(private http: Http) { }

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

  newQAPair (formValue) {
    return this.http.post(this.qapairsUrl, {
      question: formValue.question,
      correctAnswers: formValue.correctAnswers,
      wrongAnswers: formValue.wrongAnswers,
      createdAt: new Date()
    }, this.headers)
      .map(response => {
        return response.json()
      })
      .subscribe((data) => this.qapairs.push(data))
  }

  updateQAPair (qapairID: string, formValue) {
    return this.http.put(`${this.qapairsUrl}/${qapairID}`, formValue)
      .map(response => {
        return response.json()
      })
      .subscribe((data) => {
        return this.qapairs.splice(this.qapairs.findIndex((element) => element._id === qapairID), 1, data)
      })
  }

  deleteQAPair (id) {
    return this.http.delete(`${this.qapairsUrl}/${id}`)
      .map(response => {
        return response.json()
      })
      .subscribe(() => {
        this.qapairs.splice(this.qapairs.findIndex((element) => element._id === id), 1)
      })
  }

  isCorrectAnswer (id, answer) {
    return this.http.post(`${this.qapairsUrl}/isCorrect`, {id, answer}, this.headers)
      .map(response => {
        return response.json()
      })
  }
}
