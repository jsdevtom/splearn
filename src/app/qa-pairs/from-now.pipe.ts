import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({name: 'fromNow'})
export class FromNowPipe implements PipeTransform {
  transform(value: Date): any {
    if (!value) return value

    return moment(value).fromNow()
  }
}