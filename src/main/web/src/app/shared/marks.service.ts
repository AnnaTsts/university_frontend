import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GET_ALL_GROUP} from '@environments/environment';
import {StudentMark} from '@models/student-mark';
import {TeacherSubject} from '@models/teacher-subject';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http: HttpClient) { }

  getAllMarks(groupId: number) {
    return this.http.get<StudentMark[][]>(`${GET_ALL_GROUP}` + groupId);
  }

}
