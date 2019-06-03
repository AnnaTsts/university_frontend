import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './system/index/index.component';
import {UserComponent} from './user/user.component';
import {StudentTableComponent} from './student-table/student-table.component';
import {TeachersTableComponent} from './teachers-table/teachers-table.component';
import {UserSummaryComponent} from './user/user-summary/user-summary.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {LoginComponent} from './auth/login/login.component';
import {SelectGroupComponent} from './select-group/select-group.component';
import {CreateTeacherSubjectComponent} from './create-teacher-subject/create-teacher-subject.component';

const appRoutes: Routes = [

  {path: 'account', component: UserSummaryComponent },
  {path: 'table', component: StudentTableComponent},

  // {path: 'test', component: TeachersTableComponent},

  {path: 'GetMarksByGroup/:id', component: TeachersTableComponent},
  {path: 'createTeacherSubject', component: CreateTeacherSubjectComponent},
  {path: 'getMarks', component: SelectGroupComponent},

  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegistrationComponent },
  {path: '', component: IndexComponent},
  {path: '**', redirectTo: ''},
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true, onSameUrlNavigation: 'reload'});
