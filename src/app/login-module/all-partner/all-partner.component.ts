import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-all-partner',
  templateUrl: './all-partner.component.html',
  styleUrls: ['./all-partner.component.css']
})
export class AllPartnerComponent implements OnInit{
  constructor(private router: Router, private http: HttpClient){}
  public partnerDetails: any={};



  ngOnInit(): void {
    this.getPartner();
      
  }

  getPartner(){
    this.http.get(`http://localhost:8082/partner/partner-car`).subscribe(
      (respose: any)=>{
        console.log(respose);
        this.partnerDetails=respose;
        console.log(this.partnerDetails);

      }
    )
  }

  OnClikedCar(){
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/car-list']);
    });
  }
  OnClikedHome(){
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/admin']);
    });
  }
  OnClikedApprove(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/approve']);
    });
  }
  
  logout() {
    localStorage.clear();
     this.router.navigate(['/login']); // Replace '/login' with the actual path you want to navigate to after logout.
   }

}
