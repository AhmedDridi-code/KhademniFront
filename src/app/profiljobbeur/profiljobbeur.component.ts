import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiljobbeur',
  templateUrl: './profiljobbeur.component.html',
  styleUrls: ['./profiljobbeur.component.css']
})
export class ProfiljobbeurComponent implements OnInit {



  constructor(private router: Router) { }


  ngOnInit(): void {
  }


  userjobbeur() {
    this.router.navigate(["/userjobbeur"])
  }
  missions() {
    this.router.navigate(["/missions"])
  }
  statistique() {
    this.router.navigate(["/statistique"])
  }
  notes() {
    this.router.navigate(["/notes"])
  }



  //ratings


}
