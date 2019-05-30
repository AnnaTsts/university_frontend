import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'authority'
})
export class AuthorityPipe implements PipeTransform {


  private authorityMap: Map<number, string> = new Map();

  constructor() {
    this.authorityMap.set(1, 'Admin');
    this.authorityMap.set(2, 'Approver');
    this.authorityMap.set(3, 'Provider');
    this.authorityMap.set(4, 'User');
  }

  transform(value: any): string {
    if (value === undefined) {
      return 'not available';
    }

    return this.authorityMap.get(value);
  }
}
