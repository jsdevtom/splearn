import { Component, AfterViewInit, ElementRef } from '@angular/core'
import { fadeInOutAnimation } from 'app/app-routing.animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInOutAnimation
  ]
})
export class AppComponent implements AfterViewInit {

  constructor (private myElement: ElementRef) {}

  ngAfterViewInit () {
    const appRootRef = this.myElement // Necesarry because after setTimeout, 'this' becomes window
    setTimeout(function () {
      appRootRef.nativeElement.previousElementSibling.remove()
    }, 300)
  }

}
