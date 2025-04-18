import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { PartnerSharedServiceService } from '../partner-shared-service.service';
import { SharedService } from 'src/app/shared.service';
import { UserSharedService } from 'src/app/user-shared.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-partner-registration',
  templateUrl: './partner-registration.component.html',
  styleUrls: ['./partner-registration.component.css']
})
export class PartnerRegistrationComponent {
  constructor(private router: Router, private http: HttpClient, private dialog : MatDialog , private sharedData: UserSharedService){}
  public partner:{
    firstName:String;
    lastName:String;
    password:String;
    phone:String;
    email:String ;
    address:String;
  }={
    firstName: '' ,
    lastName: '' ,
    password: '' ,
    email: ''  ,
    phone: '' ,
    address: '' ,
  };



  ngOnInit(): void {
      // console.log(this.user);
  }

  partnerRegistration(){
    this.http.post(`http://localhost:8082/partner`,this.partner).subscribe(
      (response: any)=>{
        console.log(response);
        this.router.navigate(["/login"]);
      },
      (error: HttpErrorResponse) => { 
          this.openDialog('1');
      }
    )
  }

  submitClick(){
    console.log(this.partner);
    this.partnerRegistration();
  }
  openDialog(dialogType: string) {
    this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: { dialogType }
    });
  }
}
