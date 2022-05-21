import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { ServiceService } from '../services/service.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:any[]=[]
  services:any[]=[]
  clientCount:number=0;
  jobberCount:number=0;
  servicesCount:number=0;
  constructor(private router :Router, 
    public authenticationService: AuthenticationService, private userService: UserService, private service:ServiceService) { }

  ngOnInit(): void {
    this.userService.getUserAllUsers().subscribe((response:any) =>
      {
  this.users=response;
        let clients = this.users.filter(user => user.role ==="CLIENT");
        this.clientCount = clients? clients.length : 0;
        let jobbers = this.users.filter(user => user.role ==="JOBBER");
        this.jobberCount = jobbers? jobbers.length : 0;
      })

      this.service.getAllServices().subscribe((res:any) => {
        this.services = res;
        this.servicesCount = res.length;

      })
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