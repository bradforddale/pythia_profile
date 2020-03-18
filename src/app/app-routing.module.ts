import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ProfileListComponent },
  { path: 'details/:id', component: ProfileDetailsComponent },
  { path: 'new', component: NewProfileComponent },
  { path: 'update/:id', component: UpdateProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
