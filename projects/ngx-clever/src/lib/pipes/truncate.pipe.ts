import { Pipe, PipeTransform } from '@angular/core';

 @Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

   transform(value: string, limit: number = 40, trail: String = '…'): string {
    if (!value) {
        return '';
    }

     if (limit < 0) {
      limit *= -1;
      return value.length > limit ? `${value.substring(value.length - limit, value.length)}${trail}` : value;
    }

     return value.length > limit ? `${value.substring(0, limit)}${trail}` : value;
  }

 }