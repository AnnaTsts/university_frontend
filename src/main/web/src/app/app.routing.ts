import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './system/index/index.component';
import {UserComponent} from './user/user.component';
import {StudentTableComponent} from './student-table/student-table.component';
import {TeachersTableComponent} from './teachers-table/teachers-table.component';

import {RegistrationComponent} from './auth/registration/registration.component';
import {LoginComponent} from './auth/login/login.component';

const appRoutes: Routes = [

  {path: 'account', component: UserComponent, },
  {path: 'table', component: StudentTableComponent},
  {path: 'test', component: TeachersTableComponent},
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegistrationComponent },
  {path: '', component: IndexComponent},
  {path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: 'reload'});
