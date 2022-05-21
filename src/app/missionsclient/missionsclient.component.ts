import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../service/job.service';

@Component({
  selector: 'app-missionsclient',
  templateUrl: './missionsclient.component.html',
  styleUrls: ['./missionsclient.component.css']
})
export class MissionsclientComponent implements OnInit {

  annonces:any[]=[]
  constructor(private router :Router, private jobService:JobService) { }

  ngOnInit(): void {
    this.jobService.listeMyJobs().subscribe((result:any) => {
      this.annonces= result;
      console.log(this.annonces);
    })
  }
  annonce(){
    this.router.navigate(["/annonce"])
  }
  delete(id:string){
    this.jobService.deleteJob(id).subscribe((result:any) => {
      this.annonces = this.annonces.filter(el=> el.id !== id);
    })
  }
}
