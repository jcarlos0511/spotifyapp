import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: string): string {
    let character = parseInt(limit);
    return value.length > character ? value.substring(0,character) + "..." : value;
  }

}
