import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[autoFocusDirective]'
})
export class AutoFocusDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.focus()
  }

}