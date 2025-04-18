import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PartnerSharedServiceService } from '../partner-shared-service.service';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit{

  constructor(private router: Router, private http: HttpClient, private shareData: SharedService){}
  userDetails: any = {}

  getUserDetails() {
    const userId = localStorage.getItem('adminId');

    if (userId) {
      this.http.get(`http://localhost:8082/user/${userId}`).subscribe(
        (response: any) => {
          this.userDetails = response;
          console.log('User Details:', this.userDetails);
          localStorage.setItem("userId",response.id);
          localStorage.setItem("user_id",this.userDetails.id);
        },
        (error) => {
          console.error('Error fetching user details', error);
          // Handle error here, e.g., show a user-friendly message
        }
      );
    } else {
      console.error('UserId is null. Handle this case appropriately.');
      // Handle the case where adminId is null, e.g., redirect to login
    }
  }

  OnClickedRecodes(){
    localStorage.setItem("userid",this.userDetails.firstName);
    localStorage.setItem("user_id",this.userDetails.id);
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/records']);
    });
  }

  OnClickedHome(){
    localStorage.setItem("user_id",this.userDetails.id);
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/user']);
    });
  }
  
  OnClickedFindCar(){
    localStorage.setItem("user_id",this.userDetails.id);
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
    localStorage.setItem("user_id",this.userDetails.id);
    this.router.navigate(['/payment']);
   }

  ngOnInit(): void {
    this.getUserDetails();
    // this.OnClickedRecodes()
      
  }
}
