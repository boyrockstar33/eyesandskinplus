import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/user-profile', title: 'Patient Details',  icon:'users_single-02', class: '' },
    { path: '/appointments', title: 'Appointments',  icon:'users_single-02', class: '' },
    { path: '/maps', title: 'Diagnosis',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Investigation',  icon:'ui-1_bell-53', class: '' },
    { path: '/icons', title: 'Treatment',  icon:'education_atom', class: '' },
    { path: '/table-list', title: 'All Patient',  icon:'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
