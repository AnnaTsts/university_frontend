import {Component, OnInit} from '@angular/core';
import {AuthService} from '@services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit {


  loading = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  get authorized() {
    return this.authService.getDecodedToken() != null;
  }




  intoTripPage(id) {
    this.router.navigate(['trip/' + id]);
  }


  ngOnInit() {
   window.scrollTo(0, 0);
  }

}

