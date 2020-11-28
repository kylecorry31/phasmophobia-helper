import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFormat'
})
export class ArrayFormatPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(', ');
  }

}
