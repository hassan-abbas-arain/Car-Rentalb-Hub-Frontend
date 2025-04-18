import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  activeItem: any;

 sidebarItems = [
    {image:'../../../assets/icon/Home.png', label: 'Home', submenu: ['Home 1', 'Home 2', 'Home 3'] },
    {image:'../../../assets/icon/Database.png', label: 'Merchant Profile', submenu: ['Page 1', 'Page 2', 'Page 3'] },
    {image:'../../../assets/icon/Secure Transaction.png', label: 'Transaction', submenu: ['Page 1', 'Page 2', 'Page 3'] },
    {image:'../../../assets/icon/Vector.png', label: 'Reconciliation', submenu: ['Page 1', 'Page 2', 'Page 3'] },
    {image:'../../../assets/icon/Reporting.png', label: 'Finance Reports', submenu: ['Page 1', 'Page 2', 'Page 3'] },
    {image:'../../../assets/icon/User workflow.png', label: 'Administration', submenu: ['Page 1', 'Page 2', 'Page 3'] },
    // ... add more items as needed
  ];

  setActiveItem(item: any): void {
    this.activeItem = item;
  }

}
