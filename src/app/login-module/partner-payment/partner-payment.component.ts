import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerSharedServiceService } from '../partner-shared-service.service';

@Component({
  selector: 'app-partner-payment',
  templateUrl: './partner-payment.component.html',
  styleUrls: ['./partner-payment.component.css']
})
export class PartnerPaymentComponent implements OnInit{
  public paymentDetails:{
    startDate: Date;
    endDate: Date;
    registrationNumber: string;
    rentPerDay: number;
  }[]=[];


  constructor(private router: Router, private http: HttpClient, private sharedData: PartnerSharedServiceService) {
  }


  ngOnInit(): void {
      this.getPayment();
  }


  getPayment(){
    let partnerId = this.sharedData.partnerId;
    this.http.get(`http://localhost:8082/partnerPaymentInfo/${partnerId}`).subscribe(
      (response: any)=>{
        console.log(response);
        this.paymentDetails = response;
      }
    )

  }

  addCar(){
    this.router.navigate(['/addCar']);
  }
  
  homeClick(){
    this.router.navigate(["/partner"]);
  }
  
  approvedCarClick(){
    this.router.navigate(["/approvedCar"]);
  }

  logout() {
    localStorage.clear();
     this.router.navigate(['/login']); // Replace '/login' with the actual path you want to navigate to after logout.
   }
  
}
