import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url=environment.apiUrl;
  constructor(private http:HttpClient) { }

  getUserByRole(role : string){
    return this.http.get(this.url+"user/list/"+role);
  }
  getUserAllUsers(){
    return this.http.get(this.url+"user/list/");
  }

  deleteUser(id : number){
    return this.http.delete(this.url+"user/delete/"+id);
  }
}
