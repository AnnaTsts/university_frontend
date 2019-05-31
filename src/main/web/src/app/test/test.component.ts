import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  constructor() {
  }

  personalDetails = [
    {
      fname: 'Muhammed',
      lname: 'Shanid',
      email: 'shanid@shanid.com'
    },
    {
      fname: 'John',
      lname: 'Abraham',
      email: 'john@john.com'
    },
    {
      fname: 'Roy',
      lname: 'Mathew',
      email: 'roy@roy.com'
    }];

  ngOnInit() {
  }

  addNew() {
  }

  remove() {
  }

  checkAll() {
  }

}
