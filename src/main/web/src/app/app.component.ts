import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {title} from "@environments/environment";
//import {StompClientService} from "@services/stomp-client.service";
//import {AuthService} from "@services/auth.service";
//import {LoadingService} from "@services/loading.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  loading: boolean = false;


  public constructor(private titleService: Title,) {
    this.setTitle(title);

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
