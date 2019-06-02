import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GET_ALL_GROUP, GET_ALL_SUBJECT, GET_ALL_SUBJECT_BY_TEACHER} from '@environments/environment';
import {Subject} from '@models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getAllGroup() {
    return this.http.get<Subject[]>(`${GET_ALL_SUBJECT}`);
  }

  getAllGroupByTeacher() {
    return this.http.get<Subject[]>(`${GET_ALL_SUBJECT_BY_TEACHER}`);
  }

}
