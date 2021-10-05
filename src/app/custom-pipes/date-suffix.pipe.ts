import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateSuffix' })
export class DateSuffix implements PipeTransform {
  pipe = new DatePipe('en-IN');
  transform(value: any): string {
    const day = this.pipe.transform(value, 'd');
    let suffix = 'th';

    if (day === '1' || day === '21' || day === '31') {
      suffix = 'st';
    } else if (day === '2' || day === '22') {
      suffix = 'nd';
    } else if (day === '3' || day === '23') {
      suffix = 'rd';
    }

    return day + suffix + ' ' + this.pipe.transform(value, 'MMM');
  }
}


@Pipe({ name: 'dateSuffixFull' })
export class DateSuffixFull implements PipeTransform {
  pipe = new DatePipe('en-IN');
  transform(value: any): string {
    const day = this.pipe.transform(value, 'd');
    let suffix = 'th';

    if (day === '1' || day === '21' || day === '31') {
      suffix = 'st';
    } else if (day === '2' || day === '22') {
      suffix = 'nd';
    } else if (day === '3' || day === '23') {
      suffix = 'rd';
    }

    return day + suffix + ' ' + this.pipe.transform(value, 'MMMM yyyy');
  }
}
