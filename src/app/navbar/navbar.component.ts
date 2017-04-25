import { Component, OnInit } from '@angular/core';
import { QaPairsService } from "app/qa-pairs/qa-pairs.service";
import { filterToBeAssessed } from "../helpers"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private numToBeAssessed: number

  constructor(private qaService: QaPairsService) { }

  ngOnInit() {
    this.qaService.getQAPairstoBeAssessed()
      .subscribe((qapairsToBeAssessed) => {
        this.numToBeAssessed = qapairsToBeAssessed.length
      })
    this.qaService.qapairsChanged
      .subscribe((updatedQAPairs) => {
        this.numToBeAssessed = filterToBeAssessed(updatedQAPairs).length
      })
  }

}
