import {Component, OnInit} from '@angular/core';
import {UsersService} from '../shared/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '@models/user';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;
  editable = false;

  constructor(private router: Router,
              private http: HttpClient,
              private usersService: UsersService,
              private aRoute: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.usersService.getUserSummaryById(+this.aRoute.snapshot.paramMap.get('id')).subscribe(data => {
      this.user = data;
      this.editable = (this.user.authority === 'ROLE_PROVIDER' || this.user.authority === 'ROLE_APPROVER') && this.authService.getDecodedToken().authority === 'ROLE_ADMIN';
    }, err => {
      alert(err);
    });
    window.scrollTo(0, 0);
  }

  editUser() {
    this.router.navigate(['edit/' + this.user.id]);
  }

}
