import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'

import { User } from "app/auth/user.model";

@Injectable()
export class AuthService {
  private authUrl = 'user'
  private headers = new Headers({'Content-Type': 'application/json'})
  public firstName

  constructor(private http: Http) { }

  setCredentails (data) {
    localStorage.setItem('jwt', data.jwt)
    localStorage.setItem('userId', data.userId)
    this.firstName = data.firstName
  }

  signUp (user: User) {
    return this.http.post(this.authUrl, user, this.headers)
      .map((response: Response) => response.json())
  }

  signIn (user: User) {
    return this.http.post(`${this.authUrl}/signin`, user, this.headers)
      .map((response: Response) => response.json())
  }

  logOut () {
    localStorage.clear()
  }

  get isLoggedIn () {
    return Boolean(localStorage.getItem('jwt'))
  }
}
