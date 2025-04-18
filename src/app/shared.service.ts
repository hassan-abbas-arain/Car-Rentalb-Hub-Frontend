import { Injectable } from '@angular/core';
import { Subject, empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedVehicle: string|null = null;
  startDate: Date = new Date();
  endDate: Date= new Date();
  rentPerDay: number=0;
  address: string ="";
  userId:number = 0;
  constructor(){
    this.selectedVehicle;
  }
  
}
