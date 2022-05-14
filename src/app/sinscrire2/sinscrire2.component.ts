import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-sinscrire2',
  templateUrl: './sinscrire2.component.html',
  styleUrls: ['./sinscrire2.component.css']
})
export class Sinscrire2Component implements OnInit {

  invalid=false;
  sinscrireForm = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    prenom: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    mdp: new FormControl('',[Validators.required]),
    telephone: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
  });
  constructor(private router: Router,private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  ConditionGenerale(){
    this.router.navigate(["/ConditionGenerale"])}

    inscrit(){
      if(this.sinscrireForm.valid){
        //let user = new User(this.sinscrireForm.value.email, this.sinscrireForm.value.mdp, ["USER1"]);
        this.authService.users.push({"email":this.sinscrireForm.value.email as string, "password":this.sinscrireForm.value.password as string, "roles":["USER2"]});
        this.router.navigate(["/connection"]);
    }else{
      this.invalid=true;
    }
  }
}
