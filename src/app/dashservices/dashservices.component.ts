import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-dashservices',
  templateUrl: './dashservices.component.html',
  styleUrls: ['./dashservices.component.css']
})
export class DashservicesComponent implements OnInit {

 
  constructor(private router :Router, 
    public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  dashboard(){
    this.router.navigate(["/dashboard"])
  }

dashservices(){
  this.router.navigate(["/dashservices"])
}
dashjobbeurs(){
  this.router.navigate(["/dashjobbeurs"])
}
dashclients(){
  this.router.navigate(["/dashclients"])
}dashcontact(){
  this.router.navigate(["/dashcontact"])
}
logout() {
  this.authenticationService.logout();
 
}
}