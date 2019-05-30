import {Component, OnInit} from '@angular/core';
import {UserBasketTotalComponent} from "../user-basket-total/user-basket-total.component";

@Component({
  selector: 'app-user-basket-total-price',
  templateUrl: './user-basket-total-price.component.html',
  styleUrls: ['./user-basket-total-price.component.scss']
})
export class UserBasketTotalPriceComponent implements OnInit {
  count: number;

  constructor(private userBasketTotal: UserBasketTotalComponent) {
  }

  ngOnInit() {
    this.count = this.userBasketTotal.getTotal();
  }

}
