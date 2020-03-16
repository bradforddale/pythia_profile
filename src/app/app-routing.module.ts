import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './Profile-details/Profile-details.component';
import { ProfileListComponent } from './Profile-list/Profile-list.component';
import { NewProfileComponent } from './new-Profile/new-Profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ProfileListComponent },
  { path: 'details/:id', component: ProfileDetailsComponent },
  { path: 'new', component: NewProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
