import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job.service';

@Component({
  selector: 'app-statistiqueclient',
  templateUrl: './statistiqueclient.component.html',
  styleUrls: ['./statistiqueclient.component.css']
})
export class StatistiqueclientComponent implements OnInit {

  constructor(private jobService : JobService) { }
  jobs=0;
  ngOnInit(): void {
    this.jobService.listeMyJobs().subscribe((jobs:any) => {
      this.jobs = jobs.length;
      console.log(this.jobs);
      console.log(jobs)
    })
  }

}
