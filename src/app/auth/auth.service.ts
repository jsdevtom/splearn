import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'

import { User } from "app/auth/user.model";
import { ErrorsService } from "app/errors/errors.service";
import * as handleError from 'app/errors/handleErrorsInServices'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  private authUrl = 'user'
  private headers = new Headers({'Content-Type': 'application/json'})
  public firstName

  constructor(private http: Http, private errorsService: ErrorsService) { }

  setCredentails (data) {
    localStorage.setItem('jwt', data.jwt)
    localStorage.setItem('userId', data.userId)
    this.firstName = data.firstName
  }

  signUp (user: User) {
    const response = this.http.post(this.authUrl, user, this.headers)
      .map((response: Response) => response.json())
    
    response
      .subscribe(
        (data) => {},
        (error: any): Observable<Error> => {
          error = error.json()
          this.errorsService.handleError(error)
          return Observable.throw(error)
        }
      )
    
    return response
  }

  signIn (user: User) {
    const response = this.http.post(`${this.authUrl}/signin`, user, this.headers)
      .map((response: Response) => response.json())
    
    response
      .subscribe(
        (data) => {},
        (error: any): Observable<Error> => {
          error = error.json()
          this.errorsService.handleError(error)
          return Observable.throw(error)
        }
      )

     return response
  }

  logOut () {
    localStorage.clear()
  }

  get isLoggedIn () {
    return Boolean(localStorage.getItem('jwt'))
  }
}
