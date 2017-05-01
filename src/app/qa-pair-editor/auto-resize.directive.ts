import { Directive, ElementRef, Input, AfterViewInit, HostListener } from '@angular/core';

@Directive({
    selector: '[autoResize]'
})
export class AutoResizeDirective implements AfterViewInit {

    @HostListener('input') onInput() {
        this.assignScrollHeightAsElHeight()
    }

    constructor(public el: ElementRef) {
        el.nativeElement.style.height = 'auto';
        el.nativeElement.style.height = el.nativeElement.scrollHeight + 'px'
    }

    ngAfterViewInit() {
        this.assignScrollHeightAsElHeight()
    }

    assignScrollHeightAsElHeight() {
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px'
    }
}