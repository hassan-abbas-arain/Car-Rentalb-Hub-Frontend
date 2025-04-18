import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerSharedServiceService } from '../partner-shared-service.service';

@Component({
  selector: 'app-partner-component',
  templateUrl: './partner-component.component.html',
  styleUrls: ['./partner-component.component.css']
})
export class PartnerComponentComponent implements OnInit{
  constructor(private http: HttpClient, private router: Router, private partnerShared: PartnerSharedServiceService){}
  public partnerDetails: any =[];


  ngOnInit(): void {
      this.getPartner();
  }


  getPartner(){
    const partnerId =  localStorage.getItem('adminId');
    if(partnerId){
      this.http.get(`http://localhost:8082/partner/${partnerId}`).subscribe(
        (response: any) =>{
          this.partnerDetails = response;
          this.partnerShared.partnerId = response.id;
         
        }, 
        (error) => {
          console.error('Error fetching admin details', error);
          // Handle error here, e.g., show a user-friendly message
        }
      );
    }
    else {
      console.error('adminId is null. Handle this case appropriately.');
      // Handle the case where adminId is null, e.g., redirect to login
    }
  }
  
    addCar(){
      this.partnerShared.partnerId = this.partnerDetails.id;
      this.router.navigate(['/addCar']);
    }
  
    paymentRecord(){
      this.partnerShared.partnerId = this.partnerDetails.id;
      this.router.navigate(['/partner-payment']);
    }
  
  approvedCar(){
    this.partnerShared.partnerId = this.partnerDetails.id;
    this.router.navigate(["/approvedCar"]);
  }

  homeClick(){
    this.router.navigate(["/partner"]);
  }

  logout() {
    localStorage.clear();
     this.router.navigate(['/login']); // Replace '/login' with the actual path you want to navigate to after logout.
   }


}
