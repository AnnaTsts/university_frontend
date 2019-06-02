import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SubjectService} from "@services/subject.service";

@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.component.html',
  styleUrls: ['./select-subject.component.scss']
})
export class SelectSubjectComponent implements OnInit {

  constructor(private router: Router,
              private http: HttpClient,
              private subjectService: SubjectService) { }

  ngOnInit() {

  }

}
