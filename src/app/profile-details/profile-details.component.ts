import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../models/Profile';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProfileService } from '../services/Profile.service'

@Component({
  selector: 'app-Profile-details',
  templateUrl: './Profile-details.component.html',
  styleUrls: ['./Profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  constructor( 
    private route: ActivatedRoute,
    private location: Location,
    private ProfileService: ProfileService,
    ) { }

  @Input() selectedProfile: Profile;

  ngOnInit(): void {
    this.getProfile();
    // this.selectedProfile = {id: "123", fullname: "Bradford Dale", email: "dfkjs@gmail.com", cell: "423423", awards: [], positions: []}
  }

  getProfile(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!!id) {
      this.ProfileService.getProfile(id)
      .subscribe(Profile => this.selectedProfile = Profile);
    } 
  }
  
  goBack(): void {
    this.location.back();
  }

}
