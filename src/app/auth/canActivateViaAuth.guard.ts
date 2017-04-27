import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.isLoggedIn) {
      return true;
    }
    else {
      // start a new navigation to redirect to login page
      this.router.navigate(['/signin'])
      // abort current navigation
      return false;
    }
  }
}