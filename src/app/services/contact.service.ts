import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = environment.apiUrl
  constructor(private http:HttpClient) { }


  addContact(contact:any){
    console.log(contact)
return this.http.post(this.url+"contact",contact);
  }

  getContact(){
    return this.http.get(this.url+"contact");
      }

}
