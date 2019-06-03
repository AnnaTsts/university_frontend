import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {SubjectService} from '@services/subject.service';
import {GroupService} from '@services/group.service';
import {Group} from '@models/group';
import {Subject} from '@models/subject';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeacherSubject, TeacherSubject2} from '@models/teacher-subject';
import {User2} from '@models/user';
import {TeacherSubjectService} from '@services/teacher-subject.service';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-create-teacher-subject',
  templateUrl: './create-teacher-subject.component.html',
  styleUrls: ['./create-teacher-subject.component.scss']
})
export class CreateTeacherSubjectComponent implements OnInit {
public selectedGroup: Group;
public selectedSubject: Subject;
  public groups: Group[];
  public subjects: Subject[];
  subjectLoading = false;
  groupsLoading = false;
  teacherSubject: TeacherSubject;
  selectedSemester: number;
  filterForm: FormGroup;
  loading1 = false;
  loading2 = false;
  submitted = false;

  constructor(private router: Router,
              private http: HttpClient,
              private subjectService: SubjectService,
              private groupService: GroupService,
              private teacherS: TeacherSubjectService,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.groupService.getAllGroup().subscribe(data => {
      this.groups = data;
      console.log(this.groups);
    }, err => {
      alert(err);
    });
    this.subjectService.getAllSubject().subscribe(data => {
      this.subjects = data;
      console.log(this.subjects);
    }, err => {
      alert(err);
    });

    console.log(this.groups);
    console.log(this.subjects);
  }


  add() {
    this.loading1 = true;
    this.teacherSubject = new class implements TeacherSubject2 {

      GroupId: number;
      Id: number;

      Subject: Subject;
      SubjectId: number;

      TeacherId: string;
      Semester: number;
    }();

    // this.teacherSubject.Group = this.selectedGroup;
    this.teacherSubject.GroupId = this.selectedGroup.Id;
    // this.teacherSubject.Semester = this.selectedSemester;
    // this.teacherSubject.Subject = this.selectedSubject;
    this.teacherSubject.SubjectId = this.selectedSubject.Id;
    console.log( this.teacherSubject);
    this.teacherS.postTeacherSubject(this.teacherSubject).subscribe( () => {

    this.router.navigate(['']);
  });
  }

  get() {
    this.router.navigate(['getMarks/'/*+ this.auth.currentId()*/]);
  }
}
