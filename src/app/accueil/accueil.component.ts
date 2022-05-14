import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router) { } 

  ngOnInit(): void {
  }

  annonce(){
    this.router.navigate(["/annonce"])}
    
   job(){
    this.router.navigate(["/job"])}

 
    packs(){
      this.router.navigate(["/packs"])}
      categorie(){
        this.router.navigate(["/categorie"])}
}
