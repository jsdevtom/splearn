import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { QaPairsService } from "app/qa-pairs/qa-pairs.service";
import { filterToBeAssessed } from "app/helpers";


@Component({
  selector: 'app-qa-pairs',
  templateUrl: './qa-pairs.component.html',
  styleUrls: ['./qa-pairs.component.scss']
})
export class QaPairsComponent implements OnInit {
  private qapairs = []
  private qapairsToBeAssessed = []
  private currentQapair
  private isEditMode: Boolean
  private shouldShowNewQAModal: Boolean = false

  constructor(private qaService: QaPairsService) { }

  ngOnInit() {
    this.qaService.getQAPairs()
      .subscribe((qapairsArr) => {
        this.qapairs = qapairsArr.map((qapair) => {
          qapair.toBeAssessedInTime = moment(qapair.toBeAssessedNext).fromNow()
          return qapair
        })
        this.qapairsToBeAssessed = filterToBeAssessed(qapairsArr)
      })
    this.qaService.qapairsChanged
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
}
