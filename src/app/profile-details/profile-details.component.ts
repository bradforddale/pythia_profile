import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../models/profile';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProfileService } from '../services/profile.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  constructor( 
    private route: ActivatedRoute,
    private location: Location,
    private profileService: ProfileService,
    private Router: Router,
    ) { }

  @Input() selectedProfile: Profile;

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!!id) {
      this.profileService.getProfile(id)
      .subscribe(profile => this.selectedProfile = profile);
    } 
  }
  
  goBack(): void {
    this.location.back();
  }

  goUpdate(): void {
    this.Router.navigateByUrl(`/update/${this.selectedProfile.id}`);
  }

}
