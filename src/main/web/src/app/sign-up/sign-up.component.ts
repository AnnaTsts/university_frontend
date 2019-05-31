import { Component, OnInit } from '@angular/core';

import { tap, filter, mergeMap } from 'rxjs/operators';

import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from "../service/auth.service";
import {User} from "@models/user";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  // public email: string;
  // public login: string;
  // public password: string;
  // public password2: string;
  //
  //
  // constructor(private authService: AuthService,private router: Router) { }
  //
  // public signUp(): void {
  //   if (this.password !== this.password2) {
  //     alert('passwords are differrent!');
  //     return;
  //   }
  //
  //   this.authService.singUp(<UserLoginModel> { Email: this.email, UserName : this.login, Password: this.password, ConfirmPassword : this.password2})
  //   .subscribe(_ => {
  //     this.router.navigate(['sign-in']);
  //   });

  registrationForm: FormGroup;
  submitted = false;
  error = '';
  loading = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    console.log("Yes-you going to sing-up")
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(128)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(128)]],
      passwordConfirm: ['', [Validators.required]]
    } );
    window.scrollTo(0, 0);
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    this.loading = true;

    const registrationPayload = {
      "firstName": this.registrationForm.controls.firstName.value.trim(),
      "lastName": this.registrationForm.controls.lastName.value.trim(),
      "username": this.registrationForm.controls.username.value.trim(),
      "email": this.registrationForm.controls.email.value.trim(),
      "password": this.registrationForm.controls.password.value,
   //   "role": "ROLE_USER"
    };

    this.authService.singUp(<User> { email: this.registrationForm.controls.email.value.trim(), username : this.registrationForm.controls.username.value.trim(), password: this.registrationForm.controls.password.value, ConfirmPassword : this.registrationForm.controls.passwordConfirm.value})
      .subscribe(_ => {
        this.router.navigate(['sign-in']);
      });
  }
    // this.authService.singUp(<UserLoginModel> { Email: this.login, Password: this.password, ConfirmPassword : this.password2})
    // .subscribe();

    // this.authService.validateLogin(this.login).pipe(
    //   tap(isValid => {
    //     if (!isValid) {
    //       alert('user with such login already exists');
    //     }
    //   }),
    //   filter(isValid => isValid),
    //   mergeMap(_ =>
    //     this.authService.singUp(<UserLoginModel> { login: this.login, password: this.password },
    //       this.firstName, this.lastName))
    // ).subscribe(_ => {
    //   this.router.navigate(['dashboards'])
    // });


  }


