import { Injectable } from '@angular/core';
import {GET_ALL_CHAIR, GET_ALL_GROUP, GET_ALL_GROUP_BY_TEACHER} from '@environments/environment';
import {HttpClient} from '@angular/common/http';
import {Group} from '@models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getAllGroup() {
    return this.http.get<Group[]>(`${GET_ALL_GROUP}`);
  }


  getAllGroupByTeacher() {
    return this.http.get<Group[]>(`${GET_ALL_GROUP_BY_TEACHER}` );
  }

}
