import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { NewProfileComponent } from './new-profile/new-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    ProfileListComponent,
    NewProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
