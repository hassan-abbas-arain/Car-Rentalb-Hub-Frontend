  import { HttpClient } from '@angular/common/http';
  import { Component,OnInit } from '@angular/core';
  import { Route, Router } from '@angular/router';
  import { SharedService } from 'src/app/shared.service';


  @Component({
    selector: 'app-car-list-component',
    templateUrl: './car-list-component.component.html',
    styleUrls: ['./car-list-component.component.css']
  })
  export class CarListComponentComponent implements OnInit{

    constructor(public router: Router, public http: HttpClient,private sharedService: SharedService){}
    public cars: any[] =[];

    


    getAllCar() {
      this.http.get('http://localhost:8082/admin/cars').subscribe(
        (response: any) => {
          this.cars = response;
        },
        (error) => {
          console.error('Error fetching cars', error);
        }
      );
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
      this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
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
      
      this.getAllCar();
      
    }
  } 
