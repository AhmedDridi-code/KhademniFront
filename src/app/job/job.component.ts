
import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router ,ActivatedRoute, Data} from '@angular/router';
import { Job } from '../models/job.model';
import { PopupComponent } from '../popup/popup.component';
import { AuthenticationService } from '../service/authentication.service';

import { JobService } from '../service/job.service';
import { PostulationService } from '../services/postulation.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],


})

export class JobComponent implements OnInit {
  public date = new Date();
jobs : any[]=[];
ville:any=null
service:any=null


  constructor(private jobService : JobService, public auth: AuthenticationService,
     public postulService: PostulationService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.jobService.listeJobs().subscribe((jobs:any)=>{
      this.jobs = jobs;
      console.log(this.jobs);
    })
  }
  setVille(ville:string){
    this.ville = ville;
  }
  setService(service:string){
this.service=service
  }
  postuler(offreId:number){
    this.postulService.addPostulation(offreId).subscribe((result:any)=>{
        console.log(result);
        this.dialog.open(PopupComponent, {
          data: {
            message: result.message,
          },
        });
    },(error)=>{
      this.dialog.open(PopupComponent, {
        data: {
          message: error.error.message,
          error: error.error.failed,
        },
      });
    })
  }

}

