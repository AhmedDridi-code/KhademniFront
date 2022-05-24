import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../service/job.service';
import { PostulationService } from '../services/postulation.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  postulations:any[]=[]
  constructor(private router : Router, public postulationService : PostulationService) { }

  ngOnInit(): void {
    this.postulationService.getPostulationByJobberId().subscribe((result:any)=>{
      this.postulations= result;
      console.log(result);
    })
  }

  job(){
    this.router.navigate(["/job"])
  }
}
