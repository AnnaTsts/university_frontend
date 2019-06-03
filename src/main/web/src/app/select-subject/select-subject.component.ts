import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SubjectService} from "@services/subject.service";
import {Subject} from "@models/subject";

@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.component.html',
  styleUrls: ['./select-subject.component.scss']
})
export class SelectSubjectComponent implements OnInit {

  subjects: Subject[];

  constructor(private router: Router,
              private http: HttpClient,
              private subjectService: SubjectService) { }

  ngOnInit() { this.subjectService.getAllSubject().subscribe(data => {
    this.subjects = data;
    console.log(this.subjects);
  }, err => {
    alert(err);
  });

  }

}
