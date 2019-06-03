// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {User} from '@models/user';
// import {BehaviorSubject} from 'rxjs';
// import {map} from 'rxjs/operators';
// import {
//   LOGIN_URL,
//   PASSWORD_RECOVERY_URL,
//   REGISTRATION_SPECIAL_USER_URL,
//   REGISTRATION_URL
// } from '@environments/environment';
// import * as jwt_decode from 'jwt-decode';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private currentUserSubject: BehaviorSubject<User>;
//   username: BehaviorSubject<string> = new BehaviorSubject(this.currentUsername);
//
//   tokenForObesrver: BehaviorSubject<string> = new BehaviorSubject(this.getDecodedToken());
//
//   constructor(private http: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.token));
//     this.username.next(this.currentUsername);
//     this.tokenForObesrver.next(this.getDecodedToken());
//   }
//
//   login(loginPayload) {
//     return this.http.post<any>(`${LOGIN_URL}`, loginPayload).pipe(
//       map(data => {
//         if (data) {
//           console.log(JSON.stringify(data.accessToken));
//           localStorage.setItem('currentUser', data.accessToken);
//           console.log("---");
//           console.log(localStorage.getItem('currentUser'));
//           console.log("---");
//           this.currentUserSubject.next(data.accessToken);
//           this.username.next(this.currentUsername);
//           this.tokenForObesrver.next(this.getDecodedToken());
//         }
//         return data;
//       }));
//   }
//
//   logout() {
//     // remove user from local storage to log user out
//     console.log("WATATAT");
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
//   }
//
//   registration(registrationPayload) {
//     return this.http.post<any>(`${REGISTRATION_URL}`, registrationPayload).pipe(
//       map(data => {
//           return data;
//         }
//       ));
//   }
//
//   registrationSpecUser(registrationPayload) {
//     return this.http.post<any>(`${REGISTRATION_SPECIAL_USER_URL}`, registrationPayload).pipe(
//       map(data => {
//           return data;
//         }
//       ));
//   }
//
//   recoveryPassword(recoveryPasswordPayload) {
//     return this.http.get<any>(`${PASSWORD_RECOVERY_URL}?email=` + recoveryPasswordPayload).pipe(
//       map(data => {
//           return data;
//         }
//       ));
//   }
//
//   private get currentUsername() {
//     if (this.token) {
//       return this.getDecodedToken().username;
//     } else { return null; }
//   }
//
//   public get currentUserValue(): User {
//     return this.currentUserSubject.value;
//   }
//
//   public get token() {
//     return localStorage.getItem('currentUser');
//   }
//
//   getTokenAsObservable() {
//     return this.tokenForObesrver.asObservable();
//   }
//
//   getDecodedToken() {
//     try {
//       return jwt_decode(this.token);
//     } catch (Error) {
//       return null;
//     }
//   }
//
//   getTokenExpirationDate(token: string): Date {
//     const decoded = jwt_decode(token);
//
//     if (decoded.exp === undefined) { return null; }
//
//     const date = new Date(0);
//     date.setUTCSeconds(decoded.exp);
//     return date;
//   }
//
//   isTokenExpired(): boolean {
//     const date = this.getTokenExpirationDate(this.token);
//     if (date === undefined) { return true; }
//     return !(date.valueOf() > new Date().valueOf());
//   }
// }
