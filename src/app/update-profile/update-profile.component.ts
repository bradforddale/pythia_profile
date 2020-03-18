import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private location: Location,
    private profileService: ProfileService,
    ) { }

  @Input() profile: Profile;
  public errorMessage: string = "";
  public successMessage: string = "";

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!!id) {
      this.profileService.getProfile(id)
      .subscribe(p => this.profile = p);
    } 
  }

  updateProfile(): void {
    this.profileService.update(this.profile.id, this.profile)
        .subscribe((responseMessage: any) => this.setMessageBasedOnResponse(responseMessage))
  }

  private setMessageBasedOnResponse(responseMessage: any): void {
    if (!!responseMessage && !!responseMessage.message) {
      if (responseMessage.message.toLowerCase().includes("error")) {
        this.setErrorMessage(responseMessage.message);
      } else {
        this.setSuccessMessage(responseMessage.message);
      }
    } else {
      this.setErrorMessage(JSON.stringify(responseMessage));
    }
  }

  private setSuccessMessage(message: string): void {
    this.errorMessage = "";
    this.successMessage = message;
  }

  private setErrorMessage(message: string): void {
    this.errorMessage = message;
    this.successMessage = "";
  }

  goBack(): void {
    this.location.back();
  }
}
