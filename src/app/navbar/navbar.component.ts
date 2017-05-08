import { Component, OnDestroy, OnInit, HostBinding, Renderer2, ElementRef } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
import { QaPairsService } from "app/qa-pairs/qa-pairs.service";
import { filterToBeAssessed } from "../helpers"
import { AuthService } from "app/auth/auth.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>()
  private numToBeAssessed: number
  public hoverBackgroundColor: boolean = true
  public svgFill: string

  constructor(
    private qaService: QaPairsService,
    private authService: AuthService, 
    private router: Router,
    private elRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.qaService.getQAPairstoBeAssessed()
        .takeUntil(this.ngUnsubscribe)
        .subscribe((qapairsToBeAssessed) => {
          this.numToBeAssessed = qapairsToBeAssessed.length
        })
    }

    this.qaService.qapairsChanged
      .takeUntil(this.ngUnsubscribe)
      .subscribe((updatedQAPairs) => {
        this.numToBeAssessed = filterToBeAssessed(updatedQAPairs).length
      })

    this.router.events
      .takeUntil(this.ngUnsubscribe)
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.updateStyle(event.url)
      })
  }

  updateStyle (url: string) {
    if (url === '/') {
      this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent')
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'inherit')
      this.svgFill = '#000'
      this.hoverBackgroundColor = false
    } else {
      this.renderer.removeStyle(this.elRef.nativeElement, 'backgroundColor')
      this.renderer.removeStyle(this.elRef.nativeElement, 'color')
      this.svgFill = '#fff'
      this.hoverBackgroundColor = true
    }
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
