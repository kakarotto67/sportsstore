import { Component } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Component({
  templateUrl: "authentication.component.html"
})
export class AuthenticationComponent {
  showError: boolean = false;

  constructor(public authService: AuthenticationService) {}

  login() {
    this.showError = false;
    this.authService.login().subscribe(result => {
      this.showError = !result;
    });
  }
}
