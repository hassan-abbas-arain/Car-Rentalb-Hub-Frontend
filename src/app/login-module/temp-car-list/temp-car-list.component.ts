import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp-car-list',
  templateUrl: './temp-car-list.component.html',
  styleUrls: ['./temp-car-list.component.css']
})
export class  TempCarListComponent implements OnInit{

  constructor(private router: Router, private http: HttpClient){}

  public tempCars: any[]=[];

  getAllTempCar() {
    this.http.get('http://localhost:8082/tempCar').subscribe(
      (response: any) => {
        this.tempCars = response;
        console.log(response);
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
      this.router.navigate(['/admin']);
    });
  }
  
  approveCar(carId: number) {
    this.http.post(`http://localhost:8082/tempCar/approved/${carId}`, {},{ responseType: 'text' }).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
          this.router.navigate(['/car-list']);
        });

      },
      (error) => {
        console.error('Error fetching cars', error);
      }
    );
  }
  disapproveCar(carId : number) {
    this.http.post(`http://localhost:8082/tempCar/disapproved/${carId}`, {},{ responseType: 'text' }).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
          this.router.navigate(['/car-list']);
        });
      },
      (error) => {
        console.error('Error fetching cars', error);
      }
    );
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
    this.getAllTempCar();
    if (this.tempCars.length > 0) {
      this.approveCar(this.tempCars[0].id);
    }

    if (this.tempCars.length > 0) {
      this.disapproveCar(this.tempCars[0].id);
    }
  }

}
