import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {

  url = environment.apiUrl
  constructor(private http: HttpClient,private auth: AuthenticationService) { }

  addPostulation(offreId:number){
    let postulation = {offreId:offreId,userId:this.auth.loggedUser.id}
    return this.http.post(this.url+"postulation",postulation);
  }
  getPostulationByOffreUser(userId:number){
    return this.http.get(this.url+"postulation/user/"+userId);
  }

  acceptPostulation(id:number){
return this.http.get(this.url+"postulation/accept/"+id);
  }
}
