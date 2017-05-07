import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h1>
      Page not found
    </h1>
    <button 
      type="button" 
      class="pure-button pure-button-primary" 
      [routerLink]="['/']">
      Main page</button>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
