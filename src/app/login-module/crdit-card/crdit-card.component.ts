import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserSharedService } from 'src/app/user-shared.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-crdit-card',
  templateUrl: './crdit-card.component.html',
  styleUrls: ['./crdit-card.component.css']
})
export class CrditCardComponent implements OnInit{

  constructor(private router: Router, private http: HttpClient, private dialog: MatDialog, private sharedData: UserSharedService){}

  public card:{
    cardNumber:Number;
    validThru:Date ;
    cvv:Number;
    cardLimit:Number;
  }={
    cardNumber: 0 ,
    cvv: 0 ,
    cardLimit: 0,
    validThru: new Date(),
  };


  ngOnInit(): void {
      
  }


  
  creditCardRegistration(){
    const userId = this.sharedData.userId;
    this.http.post(`http://localhost:8082/creditcard/${userId}`,this.card).subscribe(
      (response: any)=>{
        console.log(response);
      },
      (error: HttpErrorResponse) => { 
        console.log(this.card);
          this.openDialog('1');
      }
    )
  }

  submitClick(){
    console.log(this.card);
    this.creditCardRegistration();
    this.router.navigate(['/login']);
  }
  openDialog(dialogType: string) {
    this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: { dialogType }
    });
  }



}
