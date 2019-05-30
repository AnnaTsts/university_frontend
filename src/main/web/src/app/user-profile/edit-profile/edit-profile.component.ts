import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "@services/users.service";
import {User} from "@models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ShareDataService} from "@services/share-data.service";
import {MatSnackBar} from "@angular/material";
import {SnackbarComponent} from "@models/snackbar/snackbar.component";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @Input() userId: number;

  editUserForm: FormGroup;
  submittedEditing = false;

  user: User;
  private newUser: User;

  isDisabled: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private userService: UsersService,
              private shareDataService: ShareDataService,
              private snackBar: MatSnackBar) {
  }

  get userDataForm() {
    return this.editUserForm.controls;
  }

  ngOnInit() {
    this.userService.getUserSummaryById(<number><unknown>this.route.snapshot.paramMap.get("id")).subscribe(
      data => {
        this.user = data;
        this.newUser = data;
      }, err => {
        alert(err);
      });

    this.editUserForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]],
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(128)]],
    });
    window.scrollTo(0, 0);
  }

  updateUser() {
    this.isDisabled = true;
    this.submittedEditing = true;

    if (!this.editUserForm.controls.username.value.trim()) {
      this.editUserForm.controls.username.setValue(this.user.username);
    }
    if (!this.editUserForm.controls.firstName.value.trim()) {
      this.editUserForm.controls.firstName.setValue(this.user.details.firstName);
    }
    if (!this.editUserForm.controls.lastName.value.trim()) {
      this.editUserForm.controls.lastName.setValue(this.user.details.lastName);
    }
    if (!this.editUserForm.controls.email.value.trim()) {
      this.editUserForm.controls.email.setValue(this.user.email);
    }

    this.newUser.username = this.editUserForm.controls.username.value.trim();
    this.newUser.details.firstName = this.editUserForm.controls.firstName.value.trim();
    this.newUser.details.lastName = this.editUserForm.controls.lastName.value.trim();
    this.newUser.email = this.editUserForm.controls.email.value.trim();

    if (this.editUserForm.invalid) {
      this.isDisabled = false;
      return;
    }

    return this.userService.updateSummary(this.newUser).subscribe(() => {
      this.router.navigate(['user/' + this.user.id]);
      this.openSnackBar("User summary updated");
      this.isDisabled = false;
    });
  }

  openSnackBar(message: string) {
    this.shareDataService.snackBarMessage = message;
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000
    })
  }
}
