import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { JobService } from '../service/job.service';
import { PostulationService } from '../services/postulation.service';

@Component({
  selector: 'app-dashbord-jobber',
  templateUrl: './dashbord-jobber.component.html',
  styleUrls: ['./dashbord-jobber.component.css']
})
export class DashbordJobberComponent implements OnInit {
  constructor(private router :Router, 
    public auth: AuthenticationService,private postulationsService: PostulationService,private jobService: JobService) { }
postulations:number = 0;
jobs:number = 0;
  ngOnInit(): void {
    this.postulationsService.getPostulationByOffreUser(this.auth.loggedUser.id).subscribe((postulations:any) =>{
      this.postulations = postulations.length;
    })
    this.jobService.listeMyJobs().subscribe((jobs:any)=>{
      this.jobs=jobs.length;
    })
  }

  dashboard(){
    this.router.navigate(["/dashboardJobbeur/postulations"]);
  }

dashservices(){
  this.router.navigate(["/dashservices"])
}
logout() {
  this.auth.logout();
}
}
