import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashclients',
  templateUrl: './dashclients.component.html',
  styleUrls: ['./dashclients.component.css']
})
export class DashclientsComponent implements OnInit {
  clients:any[]=[];
  constructor(private router :Router , 
    public authenticationService: AuthenticationService, public userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUserByRole("CLIENT").subscribe((response:any) => {
      this.clients=response;
      console.log(response);
    })
  }

  deleteClient(id:number){
    this.userService.deleteUser(id).subscribe((response:any) => {
      this.clients = this.clients.filter(client => client.id != id);
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