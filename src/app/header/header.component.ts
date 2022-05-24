import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,
    public authenticationService: AuthenticationService) { }
  ngOnInit(): void {

  }

  profiljobbeur() {
    this.router.navigate(["/profilclient"])
  }

  job() {
    this.router.navigate(["/job"])
  }

  accueil() {
    this.router.navigate(["/accueil"])
  }

  packs() {
    this.router.navigate(["/packs"])
  }

  categorie() {
    this.router.navigate(["/categorie"])
  }

  contact() {
    this.router.navigate(["/contact"])
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
  headerjobbeur() {
    this.router.navigate(["/headerjobbeur"])
  }

  dashboard() {
    this.router.navigate(["/dashboard"])
  }
  profilclient() {
    this.router.navigate(["/profilclient"])
  }

  annonce() {
    this.router.navigate(["/annonce"])
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

  headerclient() {
    this.router.navigate(["/headerclient"])
  }
  inscription() {
    this.router.navigate(["/inscription"])
  }
  connexion() {
    this.router.navigate(["/connexion"])
  }

  logout() {
    this.authenticationService.logout();

  }
}

