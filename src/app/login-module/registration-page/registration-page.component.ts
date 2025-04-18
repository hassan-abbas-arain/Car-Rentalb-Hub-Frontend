import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
constructor(private router: Router){}


userSignUp(){
this.router.navigate(["/user-registration"]);
}

partnerSignUp(){
  this.router.navigate(["/partner-registration"]);
  }
}
