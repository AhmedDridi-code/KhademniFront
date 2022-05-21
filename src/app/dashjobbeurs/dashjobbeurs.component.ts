import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashjobbeurs',
  templateUrl: './dashjobbeurs.component.html',
  styleUrls: ['./dashjobbeurs.component.css']
})
export class DashjobbeursComponent implements OnInit {
  jobbers:any[]=[]
  constructor(private router :Router, 
    public authenticationService: AuthenticationService, private userService: UserService) { }


  ngOnInit(): void {
    this.userService.getUserByRole("JOBBER").subscribe((response:any) => {
      this.jobbers=response;
      console.log(response);
    })
  }
  deleteJobber(id:number){
    this.userService.deleteUser(id).subscribe((response:any) => {
      this.jobbers = this.jobbers.filter(jobber => jobber.id != id);
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
}
dashcontact(){
  this.router.navigate(["/dashcontact"])
}
logout() {
  this.authenticationService.logout();
 
}
}