import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css'],
})
export class AdminComponentComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient,private sharedService: SharedService) {}
  adminDetails: any = {};
  public cars: any[] = [];
  public tempCars: any[] = [];
  public totalRent: number = 0;

  goToAdminComponent() {
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/admin']);
    });
  }

  getAdminDetails() {
    const adminId = localStorage.getItem('adminId');

    if (adminId) {
      this.http.get(`http://localhost:8082/admin/${adminId}`).subscribe(
        (response: any) => {
          this.adminDetails = response;
          console.log('Admin Details:', this.adminDetails);
        },
        (error) => {
          console.error('Error fetching admin details', error);
          // Handle error here, e.g., show a user-friendly message
        }
      );
    } else {
      console.error('adminId is null. Handle this case appropriately.');
      // Handle the case where adminId is null, e.g., redirect to login
    }
  }
  getTotalRent(){
    this.http.get(`http://localhost:8082/reservation/totalrent`).subscribe(
      (response: any)=>{
        this.totalRent =response;
      }
    ),

    this.http.get(`http://localhost:8082/rental/totalrent`).subscribe(
      (response: any)=>{
        this.totalRent+= response;
      }
    )
  }

  // getAllCar() {
  //   this.http.get('http://localhost:8082/admin/cars').subscribe(
  //     (response: any) => {
  //       this.cars = response;
  //     },
  //     (error) => {
  //       console.error('Error fetching cars', error);
  //     }
  //   );
  // }
  
  
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
  OnClikedPartner(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/partner-detalis']);
    });
  }
  
  logout() {
   localStorage.clear();
    this.router.navigate(['/login']); // Replace '/login' with the actual path you want to navigate to after logout.
  }

  ngOnInit(): void {
    // this.router.events.subscribe(event => {
    //   console.log('Router Event:', event);
    // });
    this.getAdminDetails();
    // this.getAllCar();
    // this.getAllTempCar();
   this.getTotalRent();
  }
}
