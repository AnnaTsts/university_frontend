import {Pipe, PipeTransform} from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {TableSettings} from '@models/table-settings.model';
import {AuthorityPipe} from './authority.pipe';

@Pipe({name: 'formatCell'})
export class FormatCellPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe,
              private datePipe: DatePipe,
              private authorityPipe: AuthorityPipe) {
  }

  transform(value: any, formatting: TableSettings) {
    if (value === undefined || value === null) {
      return 'not available';
    }

    /* Date */
    if (formatting.type === 'date') {
      if (formatting.formatArgs) {
        return this.datePipe.transform(value, formatting.formatArgs);
      }
      return this.datePipe.transform(value, 'fullDate');
    }

    /* Currency */
    if (formatting.type === 'currency') {
      return this.currencyPipe.transform(value);
    }

    if (formatting.type === 'authority') {
      return this.authorityPipe.transform(value);
    }

    if (formatting.type === 'status') {
      if (value.toString() === 'true') {
        return 'Yes';
      } else {
        return 'No';
      }
    }

    return value;
  }
}


