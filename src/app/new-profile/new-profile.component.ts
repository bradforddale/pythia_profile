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
        .subscribe((reponseMessage: string) => {
          if (reponseMessage.toLowerCase().includes("error")) {
            this.errorMessage = reponseMessage;
            this.successMessage = "";
          } else {
            this.errorMessage = "";
            this.successMessage = reponseMessage;
          }
        })
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

  private isEmpty(input: string) {

  }

}
