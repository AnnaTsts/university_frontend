import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {UserBasketComponent} from "../user-basket/user-basket.component";
import {Trip} from "@models/trip";
import {Router} from "@angular/router";

let total: number;

@Component({
  selector: 'child',
  templateUrl: './user-basket-total.component.html',
  styleUrls: ['./user-basket-total.component.scss'],
  providers: [UserBasketComponent]
})
export class UserBasketTotalComponent implements OnInit {

  services: Trip[] = [];
  @ViewChild("outletchild", {read: ViewContainerRef}) outletRef: ViewContainerRef;
  @ViewChild("contentchild", {read: TemplateRef}) contentRef: TemplateRef<any>;

  constructor(private userBasket: UserBasketComponent,
              private router: Router) {
  }

  ngOnInit() {
    this.services = this.userBasket.getTrips();
  }

  ngAfterContentInit() {
    this.outletRef.createEmbeddedView(this.contentRef);
  }

  rerender() {
    this.outletRef.clear();
    this.outletRef.createEmbeddedView(this.contentRef);
  }

  delOne(trip: Trip) {
    this.userBasket.delOne(trip);
    this.rerender();
  }

  getTotal() {
    total = 0;
    for (var item in this.services) {
      total = total + this.services[item].price; // 0,1,2
    }
    return total;
  }

  onTabChange(id: number) {
    if (this.router.navigated === false) {
      // Case when route was not used yet
      this.router.navigateByUrl(`/trip/${id}`);
    } else {
      // Case when route was used once or more
      this.router.navigateByUrl(`/blank`).then(
        () => {
          this.router.navigateByUrl(`/trip/${id}`);
        });
    }
  }
}
