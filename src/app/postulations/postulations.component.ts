import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { PostulationService } from '../services/postulation.service';

@Component({
  selector: 'app-postulations',
  templateUrl: './postulations.component.html',
  styleUrls: ['./postulations.component.css']
})
export class PostulationsComponent implements OnInit {
  postulations:any[]=[];

  constructor(public postulationService:PostulationService, public auth: AuthenticationService) { }

  ngOnInit(): void {
    this.postulationService.getPostulationByOffreUser(this.auth.loggedUser.id).subscribe((result:any)=>{
      this.postulations = result;
      console.log(result);
    })
  }

  accept(id:number){
    this.postulationService.acceptPostulation(id).subscribe((result)=>{
        console.log(result);
        let postulation = this.postulations.find(el=> el.id === id);
        let index = this.postulations.indexOf(postulation);
        this.postulations[index] = result;
    })
  }

}
