import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './user/user.component';


const appRoutes: Routes = [

  {
    path: 'account',
    component: UserComponent,

  },
  {path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: 'reload'});
