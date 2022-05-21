import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-sinscrire1',
  templateUrl: './sinscrire1.component.html',
  styleUrls: ['./sinscrire1.component.css']
})
export class Sinscrire1Component implements OnInit {

  invalid=false;
  sinscrireForm = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    prenom: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    mdp: new FormControl('',[Validators.required]),
    telephone: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
  });

  constructor(private router: Router, public authService: AuthenticationService) { }

  ngOnInit(): void {

  }
  ConditionGenerale(){
      this.router.navigate(["/ConditionGenerale"]);
    }

    inscrit(){
      if(this.sinscrireForm.valid){
        console.log(this.sinscrireForm.value)
        //let user = new User(this.sinscrireForm.value.email, this.sinscrireForm.value.mdp, ["USER1"]);
        this.authService.register(this.sinscrireForm.value,"CLIENT");
    }else{
      this.invalid=true;
    }
  }

}

  