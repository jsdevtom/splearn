import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';
import { QaPairsService } from "app/qa-pairs/qa-pairs.service";
import { filterToBeAssessed } from "app/helpers";


@Component({
  selector: 'app-qa-pairs',
  templateUrl: './qa-pairs.component.html',
  styleUrls: ['./qa-pairs.component.scss']
})
export class QaPairsComponent implements OnDestroy, OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private qapairs = []
  private qapairsToBeAssessed = []
  private currentQapair
  private isEditMode: Boolean
  private shouldShowNewQAModal: Boolean = false

  constructor(private qaService: QaPairsService) { }

  ngOnInit() {
    this.qaService.getQAPairs()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((qapairsArr) => {
        this.qapairs = qapairsArr.map((qapair) => {
          qapair.toBeAssessedInTime = moment(qapair.toBeAssessedNext).fromNow()
          return qapair
        })
        this.qapairsToBeAssessed = filterToBeAssessed(qapairsArr)
      })
    this.qaService.qapairsChanged
      .takeUntil(this.ngUnsubscribe)      
      .subscribe((updatedQAPairs) => {
        this.qapairs = updatedQAPairs
        this.qapairsToBeAssessed = filterToBeAssessed(updatedQAPairs)
      })
  }

  toggleNewQAModal(event?) {
    //TODO: figure out how to use useCapture in order to stop the clicking on the child element (.newQAModal) from calling this function.
    // event.stopPropagation()
    this.shouldShowNewQAModal = !this.shouldShowNewQAModal
  }

  onDelete(id) {
    this.qaService.deleteQAPair(id)
  }

  onEdit(currentQapair) {
    this.currentQapair = currentQapair
    this.toggleNewQAModal()
  }

  onNewQAPair() {
    this.currentQapair = null
    this.toggleNewQAModal()
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
