import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../services/profile.service'
import { Profile } from '../models/profile';

@Component({
  selector: 'app-Profile-list',
  templateUrl: './Profile-list.component.html',
  styleUrls: ['./Profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  Profiles: Profile[];

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(Profiles => this.Profiles = Profiles);
  }

}
