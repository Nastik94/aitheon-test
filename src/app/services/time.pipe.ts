import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let str = '';
    const hours   = Math.floor(value / 3600);
    const minutes = Math.floor((value - (hours * 3600)) / 60);
    const seconds = value - (hours * 3600) - (minutes * 60);
    if (hours > 0) {
      str += hours + 'hours ';
    }
    if (minutes > 0) {
      str += minutes + 'min ';
    }
    str += seconds + 'sec';
    return str;
  }

}
