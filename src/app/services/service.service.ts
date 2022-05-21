import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getAllServices(){
    return this.http.get(this.apiUrl + 'api/service');
  }

  addService(service:any){
    let serviceData = new FormData();
    serviceData.append("category",service.category);
    serviceData.append("name",service.name);
    serviceData.append("image",service.image);
    return this.http.post(this.apiUrl + 'api/service/',serviceData);
  }

deleteService(id:number){
  return this.http.delete(this.apiUrl + 'api/service/'+id);
}
}
