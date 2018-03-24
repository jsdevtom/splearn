import {Directive, ElementRef, AfterViewInit, HostListener} from '@angular/core'

@Directive({
  selector: '[autoResize]'
})
export class AutoResizeDirective implements AfterViewInit {
  constructor (public el: ElementRef) {
    el.nativeElement.style.height = 'auto'
    el.nativeElement.style.height = el.nativeElement.scrollHeight + 'px'
  }

  @HostListener('input') onInput () {
    this.assignScrollHeightAsElHeight()
  }

  ngAfterViewInit () {
    this.assignScrollHeightAsElHeight()
  }

  assignScrollHeightAsElHeight () {
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px'
  }
}
