import { Injectable, ErrorHandler } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, throwError, BehaviorSubject, Observer } from 'rxjs';
import { delay, catchError, tap, map } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtService } from './jwt.service';
import {User} from "@models/user";

@Injectable()
export class AuthService {

  private currentUser$ = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient,
    private jwtService: JwtService,
    private errorHandlingService: ErrorHandlingService) {
  }

  public isSignedIn(): Observable<boolean> {
    return this.currentUser$.pipe(
      map(currentUser => !!currentUser)
    );
  }

  // login : new_user2
  // pass: 666
  public signIn(loginModel: User): Observable<User> {
    const PATH = 'http://localhost:51862/Token';

    var data = "username="+loginModel.email+"&password="+loginModel.password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded','No-Auth': 'True'});


    return this.httpClient.post<any>(PATH, data, {headers : reqHeader});
  }

  //   return this.httpClient.post<any>(PATH, data, {headers : reqHeader}).pipe(
  //     tap(({user, token}) => {
  //           this.jwtService.persistToken(token);
  //           this.currentUser$.next(user as User);
  //         }),
  //         catchError(this.errorHandlingService.handleError)    
  //   )
  // }

  public singUp(loginModel: User) {
    const PATH = 'http://localhost:51862/api/Account/Register';
    var reqHeader = new HttpHeaders({'No-Auth': 'True'});
    return this.httpClient.post(PATH,loginModel, {headers : reqHeader});
  }

  public GetAuthBooks(): Observable<any>{
    // var reqHeader = new HttpHeaders({'Authorization': usToken });
    // var reqHeader = new HttpHeaders('Authorization:' + usToken);
    const PATH = 'http://localhost:51862/api/Testing';
    return this.httpClient.get(PATH);
  }

  public GetBooks(): Observable<any>{
    // var reqHeader = new HttpHeaders({'Authorization': usToken });
    // var reqHeader = new HttpHeaders('Authorization:' + usToken);
    const PATH = 'http://localhost:51862/api/Values';
    return this.httpClient.get(PATH);
  }


  public getCurrentUser(): Observable<User> {
    return this.currentUser$.asObservable();
  }

  // public validateLogin(login: string): Observable<boolean> {
  //   const valid = !this.mockedUsers.some(userItem => userItem[0].login == login);
  //   return of(valid).pipe(
  //     delay(1500),
  //     catchError(this.errorHandlingService.handleError)
  //   );
  // }
}
