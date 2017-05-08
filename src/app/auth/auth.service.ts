import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http'

import { User } from "app/auth/user.model";
import { ErrorsService } from "app/errors/errors.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private authUrl = 'user'
  private requestOptions = new RequestOptions(
    {
      headers: new Headers({'Content-Type': 'application/json', jwt: this.jwtInLS})
    }
  )

  public firstName

  constructor(private http: Http, private errorsService: ErrorsService) { }

  get jwtInLS () {
    return localStorage.getItem('jwt') || ''
  }

  setCredentails (data) {
    localStorage.setItem('jwt', data.jwt)
    localStorage.setItem('userId', data.userId)
    this.firstName = data.firstName
  }

  signUp (user: User) {
    console.log('signUp function called from auth.service.ts')
    const response = this.http.post(this.authUrl, user, this.requestOptions)
      .map((response: Response) => response.json())
      .catch(
        (error: any) => {
          error = error.json()
          this.errorsService.handleError(error)
          throw Observable.throw(error)
        }
      )
    
    return response
  }

  signIn (user: User) {
   return this.http.post(`${this.authUrl}/signin`, user, this.requestOptions)
      .map((response: Response) => response.json())
      .catch(
        (error: any) => {
          error = error.json()
          this.errorsService.handleError(error)
          return Observable.throw(error)
        }
      )
  }

  logOut () {
    localStorage.clear()
  }

  get isLoggedIn () {
    return Boolean(localStorage.getItem('jwt'))
  }
}
