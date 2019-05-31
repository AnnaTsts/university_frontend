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
      name: 'Muhammed Shanid',
      marks: [1, 2, 3, 4, 5]
    },
    {
      name: 'John Abraham',
      marks: [1, 2, 3, 4, 5]
    },
    {
      name: 'Roy Mathew',
      marks: [1, 2, 3, 4, 5]
    }
  ];

  ngOnInit() {
  }

  addNew() {
  }

  remove() {
  }

  checkAll() {
  }

}
