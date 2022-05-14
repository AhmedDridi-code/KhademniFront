
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
  }

  onLoggedin()
  {
    
    if(this.connexion.valid) {
      console.log("email: "+this.connexion.value.email );
      console.log("password: "+this.connexion.value.mdp );
      let isValidUser: Boolean = this.authenticationService.SignIn(this.connexion.value.email as string, this.connexion.value.mdp as string);
      console.log("valid user "+isValidUser);
      if (isValidUser)
      
        this.router.navigate(['/accueil']);     
      
        else
          //alert('Login ou mot de passe incorrecte!');
     this.erreur =1;
    }else{
      this.invalid=true;
    }

      }
 recover(){
   this.router.navigate(["/recover"]);
 }

  }