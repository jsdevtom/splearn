import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { QaPairsService } from "app/qa-pairs/qa-pairs.service";
import { filterToBeAssessed } from "../helpers"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>()
  private numToBeAssessed: number

  constructor(private qaService: QaPairsService) { }

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

  ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }
}
