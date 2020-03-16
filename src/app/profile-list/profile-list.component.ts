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
  Profiles: Profile[];

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(Profiles => this.Profiles = Profiles);
  }

}
