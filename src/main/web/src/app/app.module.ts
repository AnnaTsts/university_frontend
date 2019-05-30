import {BrowserModule, Title} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './system/header/header.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IndexComponent} from './system/index/index.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";


import {routing} from "./app.routing";
import {UserComponent} from './user/user.component';

import {UserSummaryComponent} from './user/user-summary/user-summary.component';

import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutModule} from '@angular/cdk/layout';

import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {ToTitlePipe} from "./system/data-table/toTitle.pipe";
import {FormatCellPipe} from "./system/data-table/formatCell.pipe";
import {DataTableComponent} from "./system/data-table/data-table.component";


import {CurrencyPipe, DatePipe} from "@angular/common";

import {ServiceButtonsComponent} from './service.buttons/service.buttons.component';

import {UserProfileComponent} from './user-profile/user-profile.component';
import {EditProfileComponent} from './user-profile/edit-profile/edit-profile.component';

import {UserBasketComponent} from './system/header/user-basket/user-basket.component';
import {UserBasketTotalComponent} from './system/header/user-basket-total/user-basket-total.component';
import {UserBasketTotalPriceComponent} from './system/header/user-basket-total-price/user-basket-total-price.component';


import {AgmCoreModule} from '@agm/core';

import {NgSelectModule} from '@ng-select/ng-select';



import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AuthorityPipe} from './system/data-table/authority.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    UserComponent,
    UserSummaryComponent,
    DataTableComponent,
    FormatCellPipe,
    ToTitlePipe,
    ServiceButtonsComponent,
    UserProfileComponent,
    EditProfileComponent,
    EditProfileComponent,
    UserBasketComponent,
    UserBasketTotalComponent,
    UserBasketTotalPriceComponent,
    AuthorityPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    MDBBootstrapModule.forRoot(),

    AngularMultiSelectModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcaaElwdGQIGIRnr2Ay1Hl9BuqEwDpjeY'
    }),
    NgbModule,
    NgSelectModule
  ],
  providers: [
    Title,
    CurrencyPipe,
    DatePipe,
    FormatCellPipe, ,
    AuthorityPipe,


  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}


