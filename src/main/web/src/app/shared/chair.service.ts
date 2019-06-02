import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GET_ALL_CHAIR} from '@environments/environment';
import {Chair} from '@models/chair';

@Injectable({
  providedIn: 'root'
})
export class ChairService {

  constructor(private http: HttpClient) { }

  getAllChair() {
    return this.http.get<Chair[]>(`${GET_ALL_CHAIR}`);
  }

}
