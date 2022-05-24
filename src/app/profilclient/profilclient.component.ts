import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-profilclient',
  templateUrl: './profilclient.component.html',
  styleUrls: ['./profilclient.component.css']
})
export class ProfilclientComponent implements OnInit {
  constructor(private router: Router, public authService: AuthenticationService) { }
  user = this.authService.loggedUser
  ngOnInit(): void {
    
  }
  userclient() {
    this.router.navigate(["/userclient"])
  }
  missionsclient() {
    this.router.navigate(["/missionsclient"])
  }
  statistiqueclient() {
    this.router.navigate(["/statistiqueclient"])
  }

  userjobbeur() {
    this.router.navigate(["/userclient"])
  }
  missions() {
    this.router.navigate(["/missions"])
  }
  statistique() {
    this.router.navigate(["/statistique"])
  }
  notes() {
    this.router.navigate(["/notes"])
  }
}
