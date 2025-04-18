import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {

  constructor(private router: Router, private http: HttpClient) {
    // this.selectedRole = 'User';
  }

  id:number =0;
  selectedRole: string = '';
  email: string = '';
  password: string = '';

  private urlApi = "http://localhost:8082";

  goToHome() {
    console.log("Selected Role:", this.selectedRole);
    const loginData = {
      email: this.email,
      password: this.password
    };

    console.log("Request Payload:", loginData)

    let loginEndpoint = '';

    switch (this.selectedRole) {
      case 'Admin':
        loginEndpoint = '/admin/login';
        break;
      case 'User':
        loginEndpoint = '/user/login';
        break;
      case 'Partner':
        loginEndpoint = '/partner/login';
        break;
      default:
        // Handle unexpected role
        break;
    }

    if (loginEndpoint !== '') {
      this.http.post(this.urlApi + loginEndpoint, loginData)
        .subscribe(
          (response: any) => {
            // console.log(response.UserDto);
            // console.log(response.UserDto[0]);
            if (this.selectedRole === "Admin") {
              localStorage.setItem('adminId',response.admin.id);
              this.router.navigate(['/admin'])
            } else if (this.selectedRole === "User") {
              localStorage.setItem('adminId',response.UserDto.id);
              this.router.navigate(['/user'])
            } else {
              console.log(response);
              localStorage.setItem('adminId',response.PartnerDto.id);
              console.log(localStorage.getItem('adminId'));
              this.router.navigate(["/partner"])
            } 
          },
          (error) => {
            console.error('Login failed', error);
            console.log('Full Response:', error);

            // Handle error, e.g., display an error message to the user
            if (error.status === 200 && !error.ok) {
              console.log('Detailed Error:', error.error); // Assuming the error details are in the 'error' property
            }
          }
        );
    }
  }

  singUpClick(){
    this.router.navigate(["/registration"]);
  }
}
