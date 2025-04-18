import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarListComponent } from './car-list/car-list.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    CarListComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [SidebarComponent,

    NavbarComponent]
})
export class ComponentModule { }
