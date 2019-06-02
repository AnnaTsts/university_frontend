import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './system/index/index.component';
import {UserComponent} from './user/user.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {LoginComponent} from './auth/login/login.component';

const appRoutes: Routes = [

  {
    path: 'account',
    component: UserComponent,

  },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegistrationComponent },
  {path: '', component: IndexComponent},
  {path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: 'reload', enableTracing: true});
