import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from "./user/user.component";

import {IndexComponent} from "./system/index/index.component";

import {UserProfileComponent} from "./user-profile/user-profile.component";
import {EditProfileComponent} from "./user-profile/edit-profile/edit-profile.component";



const appRoutes: Routes = [

  {
    path: 'account',
    component: UserComponent,

  },


  {path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: "reload"});
