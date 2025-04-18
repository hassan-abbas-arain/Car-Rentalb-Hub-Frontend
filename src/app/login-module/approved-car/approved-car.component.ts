import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerSharedServiceService } from '../partner-shared-service.service';

@Component({
  selector: 'app-approved-car',
  templateUrl: './approved-car.component.html',
  styleUrls: ['./approved-car.component.css']
})
export class ApprovedCarComponent implements OnInit{
  public carDetais:{
    brand: string;
    color: string;
    model: string;
    registrationNumber: string;
    year: number;
  }[]=[];

  constructor(private router: Router, private http: HttpClient, private partnerShared: PartnerSharedServiceService) {
  }


ngOnInit(): void {
  this.getCar();
    
}


getCar(){
  const parterId =  this.partnerShared.partnerId;
  console.log(parterId);
  this.http.get(`http://localhost:8082/car/partner/${parterId}`).subscribe(
    (response: any)=>{
      this.carDetais = response;
      console.log(this.carDetais);
    }
  );
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

paymentRecord(){
  this.router.navigate(['/partner-payment']);
}

logout() {
  localStorage.clear();
   this.router.navigate(['/login']); // Replace '/login' with the actual path you want to navigate to after logout.
 }


}
