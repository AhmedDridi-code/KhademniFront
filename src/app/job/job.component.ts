
import { Component,  OnInit } from '@angular/core';
import { Router ,ActivatedRoute, Data} from '@angular/router';
import { Job } from '../models/job.model';

import { JobService } from '../service/job.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],


})

export class JobComponent implements OnInit {
  public date = new Date();
jobs! : Job[];



  constructor(private jobService : JobService) {
    this.jobs = jobService.listeJobs();
  }

  ngOnInit(): void {
  }

}
