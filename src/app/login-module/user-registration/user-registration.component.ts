import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { PartnerSharedServiceService } from '../partner-shared-service.service';
import { SharedService } from 'src/app/shared.service';
import { UserSharedService } from 'src/app/user-shared.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{
  constructor(private router: Router, private http: HttpClient, private dialog : MatDialog , private sharedData: UserSharedService){}
  public user:{
    firstName:String;
    lastName:String;
    userName:String;
    password:String;
    email:String ;
    phone:String;
    license_number:String;
  }={
    firstName: '' ,
    lastName: '' ,
    userName: '' ,
    password: '' ,
    email: ''  ,
    phone: '' ,
    license_number: '' ,
  };



  ngOnInit(): void {
      // console.log(this.user);
  }

  userRegistration(){
    this.http.post(`http://localhost:8082/user`,this.user).subscribe(
      (response: any)=>{
        console.log(response);
        this.sharedData.userId = response.id;
        this.router.navigate(["/credit-card"]);

      },
      (error: HttpErrorResponse) => { 
          this.openDialog('1');
      }
    )
  }

  submitClick(){
    console.log(this.user);
    this.userRegistration();
  }
  openDialog(dialogType: string) {
    this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: { dialogType }
    });
  }
 

}
