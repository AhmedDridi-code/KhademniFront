
import { Component,  OnInit  } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user = new User();
  erreur =0;
  invalid=false;
  connexion = new FormGroup({
    email: new FormControl('',[Validators.required]),
    mdp: new FormControl('',[Validators.required]),

  });

  
  constructor( private authenticationService : AuthenticationService , 
    public router: Router) { }



  ngOnInit(): void {
    this.authenticationService.getError().subscribe((result)=>{
      this.erreur=result;
    })
  }

  onLoggedin()
  {
    
    if(this.connexion.valid) {
      console.log("email: "+this.connexion.value.email );
      console.log("password: "+this.connexion.value.mdp );
      this.authenticationService.SignIn(this.connexion.value.email, this.connexion.value.mdp)
    }else{
      this.invalid=true;
    }

      }
 recover(){
   this.router.navigate(["/recover"]);
 }

  }