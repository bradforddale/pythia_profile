import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../services/profile.service'
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  profiles: Profile[];

  ngOnInit(): void {
    this.initProfiles();
  }

  initProfiles(): void {
    this.profileService.getAll().subscribe(Profiles => this.profiles = Profiles);
  }

  deleteProfile(profile: Profile): void {
    this.profileService.delete(profile.id).subscribe((responseMessage:any) => this.initProfiles());
  }

}
