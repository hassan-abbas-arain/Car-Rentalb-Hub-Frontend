import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  selectedVehicle:  string ;
  pickedLocation: string ;
  pickUpDate: Date = new Date();
  returnDate: Date =  new Date();

  constructor(private router: Router, private http: HttpClient, private sharedService: SharedService){
    this.pickedLocation = "";
    this.selectedVehicle ="";
    // this.pickUpDate = new Date;
    // this.returnDate = new Date;
  }

  ngOnInit(): void {
      // this.updateSelectedVehicle();
  }

  updateSelectedVehicle() {

    this.sharedService.selectedVehicle = this.selectedVehicle;
    this.sharedService.endDate = new Date(this.returnDate);
    this.sharedService.startDate = new Date(this.pickUpDate );
    this.sharedService.address = this.pickedLocation;

  
  }

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
  OnClickedProceed(){
    this.updateSelectedVehicle();
    this.sharedService.selectedVehicle = this.selectedVehicle;
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/findCar']);
    });
    
  }

  logout() {
    localStorage.clear();
     this.router.navigate(['/login']); // Replace '/login' with the actual path you want to navigate to after logout.
   }

   Payment(){
    this.router.navigate(['/payment']);
   }
}
