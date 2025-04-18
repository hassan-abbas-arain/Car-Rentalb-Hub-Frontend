import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
constructor(private router:Router, private http: HttpClient, private sharedData: SharedService){}
// public paymentDetails:{
//   date: Date;
//   rent: Date;
//   registrationNumber: string;
//   rentPerDay: number;
// }[]=[];

paymentDetails:any =[];
  
  OnClickedRecodes(){
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/records']);
    });
  }

  OnClickedHome(){
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/user']);
    });
  }
  OnClickedFindCar(){
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/reservation']);
    });
  }

  logout() {
    localStorage.clear();
     this.router.navigate(['/login']); // Replace '/login' with the actual path you want to navigate to after logout.
   }
   Payment(){
    // this.shareData.userId = this.userDetails.id;
    this.router.navigate(['/payment']);
   }


   getPayment(){
    const id = localStorage.getItem("user_id");
    this.http.get(`http://localhost:8082/payment/${id}`).subscribe(
      (response: any)=>{
        console.log(response);
        this.paymentDetails = response;
      }
    )

  }


   ngOnInit(): void {
    this.getPayment()
       
   }

}
