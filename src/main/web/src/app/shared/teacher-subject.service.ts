import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from '@models/subject';
import {GET_ALL_SUBJECT_BY_TEACHER, POST_TEACHER_SUBJECT} from '@environments/environment';
import {TeacherSubject} from '@models/teacher-subject';

@Injectable({
  providedIn: 'root'
})
export class TeacherSubjectService {

  constructor(private http: HttpClient) { }

  postTeacherSubject(ts: TeacherSubject) {
    return this.http.post(`${POST_TEACHER_SUBJECT}` , ts );
  }
}
