import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilclient',
  templateUrl: './profilclient.component.html',
  styleUrls: ['./profilclient.component.css']
})
export class ProfilclientComponent implements OnInit {
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  userclient(){
    this.router.navigate(["/userclient"])}
    missionsclient(){
      this.router.navigate(["/missionsclient"])}
statistiqueclient(){
        this.router.navigate(["/statistiqueclient"])}
}
