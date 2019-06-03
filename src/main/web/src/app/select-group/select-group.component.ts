import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {GroupService} from '@services/group.service';
import {Group} from '@models/group';
import {MarksService} from '@services/marks.service';

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss']
})
export class SelectGroupComponent implements OnInit {

  public selectedGroup: Group;
  public groups: Group[];
  loading = false;

  constructor(private router: Router,
              private http: HttpClient,
              private groupService: GroupService,
              private stusentsMark: MarksService) {
  }

  ngOnInit() {
    this.groupService.getAllGroup().subscribe(data => {
      this.groups = data;
      console.log(this.groups);
    }, err => {
      alert(err);
    });
  }

  get() {
    this.router.navigate(['GetMarksByGroup/' + this.selectedGroup.Id]);
  }

  add() {
    this.router.navigate(['createTeacherSubject/']);
  }

}
