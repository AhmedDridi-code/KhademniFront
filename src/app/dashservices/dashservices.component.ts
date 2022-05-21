import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-dashservices',
  templateUrl: './dashservices.component.html',
  styleUrls: ['./dashservices.component.css']
})
export class DashservicesComponent implements OnInit {

  serviceForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    image: new FormControl(''),

  });
 servicesList:any;
  constructor(private router :Router, 
    public authenticationService: AuthenticationService,  private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getAllServices().subscribe((result) => {
      this.servicesList = result;
    })
  }
  onImagePicked(imageInput: any) {
    const file : File = imageInput.files[0];
    console.log(file);
    this.serviceForm.patchValue({image: file});
}
  addService(){
      console.log(this.serviceForm.value);
      this.service.addService(this.serviceForm.value).subscribe((result)=>{
        console.log(result);
        this.servicesList.push(result);
      })
    
  }

  deleteService(id:number) {
    this.service.deleteService(id).subscribe((result) => {
      this.servicesList = this.servicesList.filter((service:any) =>service.id !== id);
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