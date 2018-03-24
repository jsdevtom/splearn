import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { User } from 'app/auth/user.model'
import { ErrorsService } from 'app/errors/errors.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch'

@Injectable()
export class AuthService {
  public firstName
  private authUrl = 'user'

  get requestOptions () {
    return ({
      headers: new HttpHeaders({ 'Content-Type': 'application/json', jwt: this.jwtInLS })
    })
  }

  get jwtInLS () {
    return localStorage.getItem('jwt') || ''
  }

  constructor (private http: HttpClient, private errorsService: ErrorsService) { }

  setCredentails (data) {
    localStorage.setItem('jwt', data.jwt)
    localStorage.setItem('userId', data.userId)
    this.firstName = data.firstName
  }

  signUp (user: User) {
    console.log('signUp function called from auth.service.ts')
    const response = this.http.post(this.authUrl, user, this.requestOptions)
      .catch(
        (error: any) => {
          this.errorsService.handleError(error)
          throw Observable.throw(error)
        }
      )

    return response
  }

  signIn (user: User) {
   return this.http.post(`${this.authUrl}/signin`, user, this.requestOptions)
      .catch(
        (error: any) => {
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
