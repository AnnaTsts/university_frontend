import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./system/index/index.component";
import {UserComponent} from './user/user.component';


const appRoutes: Routes = [

  {
    path: 'account',
    component: UserComponent,

  },
  {path: '', component: IndexComponent},
  {path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: 'reload'});
