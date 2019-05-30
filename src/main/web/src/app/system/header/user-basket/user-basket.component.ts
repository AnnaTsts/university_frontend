import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Trip} from "@models/trip";
import {Router} from "@angular/router";
import {ADD_TO_USER_BASKET, GET_USER_BASKET} from "@environments/environment";
import {AuthService} from "@services/auth.service";

let services: Trip[] = [];

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.scss']
})
export class UserBasketComponent implements OnInit {
  @ViewChild("outlet", {read: ViewContainerRef}) outletRef: ViewContainerRef;
  @ViewChild("content", {read: TemplateRef}) contentRef: TemplateRef<any>;

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) {
  }

  ngAfterContentInit() {
    this.outletRef.createEmbeddedView(this.contentRef);
  }

  rerender() {
    this.outletRef.clear();
    this.outletRef.createEmbeddedView(this.contentRef);
  }

  ngOnInit() {
    this.setTrips();
  }


  getTrips() {
    return services;
  }

  getLenght() {
    return services.length;
  }

  addToBasket(trip: Trip) {
    services.push(trip);
    this.http.put(`${ADD_TO_USER_BASKET}` + trip.id, null).subscribe();
  }

  delOne(trip: Trip) {
    services.splice(services.indexOf(trip), 1);
    this.http.delete(`${ADD_TO_USER_BASKET}` + trip.id).subscribe();
  }

  clear() {
    services = [];
  };
  setTrips() {
    if (this.authService.currentUserValue) {
      this.http.get<Trip[]>(`${GET_USER_BASKET}`).subscribe(
        data => {
          services = data;
        });
    }

  }
}
