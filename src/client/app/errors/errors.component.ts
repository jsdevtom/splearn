import { Component, OnInit, ElementRef, HostListener, Inject } from '@angular/core'
import { DOCUMENT } from '@angular/platform-browser'
import { ErrorsService } from 'app/errors/errors.service'
import { ServerError } from 'app/errors/serverError.model'

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
  host: {
    '(document:click)': 'onDocClick($event)'
  }
})
export class ErrorsComponent implements OnInit {
  public error: ServerError
  public display = 'none'
  public topPx = ''

  constructor (
    public errorsService: ErrorsService,
    private elRef: ElementRef,
    @Inject(DOCUMENT) private document) { }

  @HostListener('window:scroll', [])
  onWindowScroll () {
    if (this.document.body.scrollTop > 0) {
      this.topPx = '0px'
    } else {
      this.topPx = 'inherit'
    }
  }

  ngOnInit () {
    this.errorsService.errorOccurred
      .subscribe(
        (error: ServerError) => {
          this.error = error
          this.display = 'inherit'
          setTimeout(() => {
            this.display = 'none'
          }, 3000)
        }
      )
  }

  onErrorHandled () {
    this.display = 'none'
  }

  onDocClick (event) {
   if (!this.elRef.nativeElement.contains(event.target) && this.display === 'inherit') this.display = 'none'
  }

}
