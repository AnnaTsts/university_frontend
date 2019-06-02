import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {GroupService} from '@services/group.service';
import {Group} from '@models/group';

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss']
})
export class SelectGroupComponent implements OnInit {

  public groups: Group[];

  constructor(private router: Router,
              private http: HttpClient,
              private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getAllGroupByTeacher().subscribe(data => {
      this.groups = data;
      console.log(this.groups);
    }, err => {
      alert(err);
    });
  }



}
