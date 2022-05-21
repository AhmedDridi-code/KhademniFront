import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Job } from '../models/job.model';
import { AuthenticationService } from './authentication.service';

const baseUrl = '${annonce}/job';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  url= environment.apiUrl
  constructor(private http:HttpClient,private auth:AuthenticationService) {
  }

  listeJobs() {
    return this.http.get(this.url+"offre/list/");
  }
 
  listeMyJobs(){
    return this.http.get(this.url+"offre/listby/"+this.auth.loggedUser.id);
  }

  ajouterJob( offre: any){
    return this.http.post(this.url+"offre/create/"+this.auth.loggedUser.id,offre);
  }

  deleteJob( id: string){
    return this.http.delete(this.url+"offre/delete/"+id);
  }
}
