import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IndexComponent} from './system/index/index.component';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {UserComponent} from './user/user.component';

import {UserSummaryComponent} from './user/user-summary/user-summary.component';
import {HeaderComponent} from './system/header/header.component';


import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutModule} from '@angular/cdk/layout';

import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {ToTitlePipe} from './system/data-table/toTitle.pipe';
import {FormatCellPipe} from './system/data-table/formatCell.pipe';
import {DataTableComponent} from './system/data-table/data-table.component';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EditProfileComponent} from './user-profile/edit-profile/edit-profile.component';
import {AgmCoreModule} from '@agm/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {MatFormFieldModule, MatPaginatorModule, MatSortModule, MatTabsModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AuthorityPipe} from './system/data-table/authority.pipe';

import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {RegistrationConfirmComponent} from './auth/registration/registration-confirm/registration-confirm.component';
import {RegistrationSuccessfulComponent} from './auth/registration/registration-successful/registration-successful.component';
import {AuthService} from './service/auth.service';
import {JwtService} from './service/jwt.service';

@NgModule({
  declarations: [
    LoginComponent ,
    RegistrationComponent ,
    RegistrationConfirmComponent ,
    RegistrationSuccessfulComponent,
    HeaderComponent,
    AppComponent,
    IndexComponent,
    UserComponent,
    UserSummaryComponent,
    DataTableComponent,
    FormatCellPipe,
    ToTitlePipe,
    UserProfileComponent,
    EditProfileComponent,
    EditProfileComponent,
    AuthorityPipe,

  ],
  imports: [
    MatPaginatorModule,
    MatTabsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    AngularMultiSelectModule,
    NgbModule,
    MatTableModule,
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
    FormatCellPipe,
    AuthorityPipe,
    AuthService,
    JwtService,
    Window

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}



