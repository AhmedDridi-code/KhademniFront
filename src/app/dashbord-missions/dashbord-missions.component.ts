import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { PostulationService } from '../services/postulation.service';

@Component({
  selector: 'app-dashbord-missions',
  templateUrl: './dashbord-missions.component.html',
  styleUrls: ['./dashbord-missions.component.css']
})
export class DashbordMissionsComponent implements OnInit {
  postulations:any[]=[]

  constructor(private postulationService: PostulationService,private auth: AuthenticationService, public router: Router) { }

  ngOnInit(): void {
    this.postulationService.getPostulationClosed(this.auth.loggedUser.id).subscribe((result:any)=>{
      this.postulations = result;
      console.log(result);
    })
  }

  finish(id:number) {
    this.postulationService.finishPostulation(id).subscribe((result)=>{
      this.ngOnInit()
    })
  }

}
