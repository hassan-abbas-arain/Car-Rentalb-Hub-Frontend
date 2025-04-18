import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerSharedServiceService } from '../partner-shared-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit{

  constructor(private http: HttpClient, private router: Router, private partnerShared: PartnerSharedServiceService,
    private dialog: MatDialog){}
  public CarDetais:{
    brand: string;
    color: string;
    model: string;
    registrationNumber: string;
    year: number;
  }= {
    brand: '',
    model: '',
    year: 0,
    color: '',
    registrationNumber: ''
};




  ngOnInit(): void {
  }


  addCarButton(){
    const partnerId = this.partnerShared.partnerId;
    this.http.post(`http://localhost:8082/tempCar/${partnerId}`,this.CarDetais).subscribe(
      (response:any)=>{
        console.log(response);
        this.router.navigate(["/partner"]);
      },(error: HttpErrorResponse)=>{
        this.openDialog("2");
      }
    )
  };


  addCar(){
    this.router.navigate(['/addCar']);
  }
  
  homeClick(){
    this.router.navigate(["/partner"]);
  }
  
  approvedCarClick(){
    this.router.navigate(["/approvedCar"]);
  }
  
  paymentRecord(){
    this.router.navigate(['/partner-payment']);
  }

  openDialog(dialogType: string) {
    this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: { dialogType }
    });
  }

  logout() {
    localStorage.clear();
     this.router.navigate(['/login']); // Replace '/login' with the actual path you want to navigate to after logout.
   }

}
