import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'newUser',
    component: AddNewUserComponent
  },
  {
    path: 'users',
    component: AllUsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }