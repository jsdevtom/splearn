import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'

import { User } from "app/auth/user.model";

@Injectable()
export class AuthService {
  private authUrl = 'user'
  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) { }

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
