import { Component, OnInit } from '@angular/core';
import { PostulationService } from '../services/postulation.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor(public postulationService:PostulationService) { }
  postulations:number=0;
  ngOnInit(): void {
    this.postulationService.getPostulationsFinished().subscribe((result:any)=>{
      this.postulations= result.length;
    })
  }

}
