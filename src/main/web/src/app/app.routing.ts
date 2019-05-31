import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './system/index/index.component';
import {UserComponent} from './user/user.component';
import {TableComponent} from './table/table.component';
import {TestComponent} from './test/test.component';


const appRoutes: Routes = [

  {path: 'account', component: UserComponent, },
  {path: 'table', component: TableComponent},
  {path: 'test', component: TestComponent},
  {path: '', component: IndexComponent},
  {path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: 'reload'});
