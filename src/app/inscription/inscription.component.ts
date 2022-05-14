import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

/*   registerForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    phone: new FormControl(''),
    birthdate: new FormControl(''),
  }); */
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  sinscrire2(){
    this.router.navigate(["/sinscrire2"])}

    sinscrire1(){
      this.router.navigate(["/sinscrire1"])}
}


