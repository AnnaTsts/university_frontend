import {Component} from '@angular/core';
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

  export class HeaderComponent {
  // token?;
  username: string;
  email: string;
  //gravatar = Utils;

  constructor(private authService: AuthService) {
    // authService.getTokenAsObservable().subscribe(data => {
    //     this.token = data;
    //   }
    // );

    console.log("=================="+authService.currentUsername)
    this.username = authService.currentUsername;
    this.email = authService.currentEmail;
  }

  get authority() {
    // return this.authService.getDecodedToken().authority;
    return "ROLE_USER";
  }

  isLoggedIn() {
    // return this.authService.currentUserValue !== null;
    return this.authService.isSignedIn;
  }

  logout() {
    this.authService.logout();
  }
}
