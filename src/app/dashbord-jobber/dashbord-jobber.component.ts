import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-dashbord-jobber',
  templateUrl: './dashbord-jobber.component.html',
  styleUrls: ['./dashbord-jobber.component.css']
})
export class DashbordJobberComponent implements OnInit {
  constructor(private router :Router, 
    public authenticationService: AuthenticationService) { }


  ngOnInit(): void {
  }

  dashboard(){
    this.router.navigate(["/dashboardJobbeur/postulations"]);
  }

dashservices(){
  this.router.navigate(["/dashservices"])
}
logout() {
  this.authenticationService.logout();
}
}
