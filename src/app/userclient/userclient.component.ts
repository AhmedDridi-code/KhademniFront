import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-userclient',
  templateUrl: './userclient.component.html',
  styleUrls: ['./userclient.component.css']
})
export class UserclientComponent implements OnInit {
  user:any;
  imagePreview:any=null
  userForm:any;
  constructor(private authService: AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.user = this.authService.loggedUser;
    this.userForm = new FormGroup({
      firstName:new FormControl(this.user["firstName"],[Validators.required]),
      lastName:new FormControl(this.user["lastName"],[Validators.required]),
      username: new FormControl(this.user["username"],[Validators.required]),
      address: new FormControl(this.user["address"],[Validators.required]), 
      phone: new FormControl(this.user["phone"],[Validators.required]),
      image:new FormControl(''),
    });      
    this.imagePreview=this.user.image; 
  }

 onImagePicked(imageInput: any) {
    const file : File = imageInput.files[0];
    this.userForm.patchValue({image: file});
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview=reader.result as string;
    };
    reader.readAsDataURL(file);
}  
 
  submit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.authService.updateUser({id:this.user.id,...this.userForm.value}).subscribe((result) => {
        console.log(result);
        this.authService.loggedUser = result;
        this.router.navigate(["/profilclient"])
      });
    }

  }

}
