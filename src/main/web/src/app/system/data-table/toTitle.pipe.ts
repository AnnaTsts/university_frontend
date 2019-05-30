import {Pipe, PipeTransform} from '@angular/core';
import {TitleCasePipe} from '@angular/common';

@Pipe({name: 'toTitle'})
export class ToTitlePipe implements PipeTransform {

  transform(value: any): string {
    if (value === undefined) {
      return 'not available';
    }
    const defaultTitlePipe = new TitleCasePipe();
    if (value === 'authorityId') {
      return 'Authority';
    } else {
      return defaultTitlePipe.transform(value.replace(/([^A-Z])([A-Z])/g, '$1 $2'));
    }
  }
}

