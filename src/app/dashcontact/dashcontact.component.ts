import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-dashcontact',
  templateUrl: './dashcontact.component.html',
  styleUrls: ['./dashcontact.component.css']
})
export class DashcontactComponent implements OnInit {
contacts:any[]=[]
  constructor(private router :Router, 
    public authenticationService: AuthenticationService,private contactService:ContactService) { }
  ngOnInit(): void {
    this.contactService.getContact().subscribe((contacts:any) =>{
      this.contacts=contacts;
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