import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../services/profile.service'

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.scss']
})
export class NewProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  public errorMessage: string = "";
  public successMessage: string = "";

  public newProfileDetails = {
    fullname: "",
    cell: "",
    email: "",
  }

  ngOnInit(): void {
  }

  validateAndCreateNewProfile(): void {
    if (!!this.isInputsValid()) {
      this.profileService.create(this.newProfileDetails)
        .subscribe((responseMessage: any) => this.setMessageBasedOnResponse(responseMessage))
    } else {
      this.errorMessage = "Inputs are invalid";
      console.error("Inputs are invalid");
    }
  }

  private isInputsValid(): boolean {
    return !!this.newProfileDetails.fullname
        && !!this.newProfileDetails.cell
        && !!this.newProfileDetails.email ;
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

}
