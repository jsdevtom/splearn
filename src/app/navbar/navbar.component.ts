import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { QaPairsService } from "app/qa-pairs/qa-pairs.service";
import { filterToBeAssessed } from "../helpers"
import { AuthService } from "app/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>()
  private numToBeAssessed: number

  constructor(private qaService: QaPairsService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.qaService.getQAPairstoBeAssessed()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((qapairsToBeAssessed) => {
        this.numToBeAssessed = qapairsToBeAssessed.length
      })
    this.qaService.qapairsChanged
      .takeUntil(this.ngUnsubscribe)
      .subscribe((updatedQAPairs) => {
        this.numToBeAssessed = filterToBeAssessed(updatedQAPairs).length
      })
  }

  onLogOut () {
    this.authService.logOut()
    this.router.navigate(['/signin'])
  }

  get isLoggedIn () {
    return this.authService.isLoggedIn
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }
}
