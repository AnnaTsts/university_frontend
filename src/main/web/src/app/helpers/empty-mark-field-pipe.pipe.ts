import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'emptyMark'
})
export class EmptyMarkFieldPipePipe implements PipeTransform {

  transform(value: any): number {
    if (value === undefined) {
      return null;
    }
    if (parseInt(value, 10) < 0) {
      return null;
    }

    return value;
  }

}
