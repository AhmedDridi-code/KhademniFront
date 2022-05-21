import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private service:ServiceService) { }
  services:any[]=[]
  services1:any[]=[]
  services2:any[]=[]
  services3:any[]=[]
  ngOnInit(): void {
    this.service.getAllServices().subscribe((services:any)=>{
      this.services = services;
      this.services1=this.services.filter(el=>el["category"]=="Confiage d'enfants")
      this.services2=this.services.filter(el=>el["category"]=="Aide a domicile pour les personnes agees")
      this.services3=this.services.filter(el=>el["category"]=="Brcolage-petits travaux")
    })
  }

}
