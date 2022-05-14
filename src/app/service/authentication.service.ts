import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public users: User[] = [{"email":"admin@gmail.com","password":"123","roles":['ADMIN']},
                   {"email":"jobbeur@gmail.com","password":"123","roles":['USER1']},
                   {"email":"client@gmail.com","password":"123","roles":['USER2']} ];

  public loggedUser: string | undefined; 
  public isloggedIn: Boolean = false;
  public roles: string[] | undefined; 
  public user:any;
   
  constructor(private router: Router) { }

 

 
logout() { 
  this.isloggedIn= false;
  this.loggedUser = undefined;
  this.roles = undefined;
  localStorage.removeItem('loggedUser');
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
  this.router.navigate(['/connexion']);
}

  SignIn(email:string, password:string):Boolean{ 
    let validUser: Boolean = false;
    console.log("email: "+email);
    console.log("password: "+password);
    const user = this.users.find(el => el.email === email && el.password === password);
    if(user){
      validUser = true;
      this.user=user;
      this.loggedUser = user.email;
        this.isloggedIn = true;
        this.roles = user.roles;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }

     return validUser;
  }

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return (this.roles.indexOf('ADMIN') >-1);
   
  }

  isUser1():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return (this.roles.indexOf('USER1') >-1);
   
  }

  isUser2():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return (this.roles.indexOf('USER2') >-1);
   
  }
  
}