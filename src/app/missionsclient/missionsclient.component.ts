import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionsclient',
  templateUrl: './missionsclient.component.html',
  styleUrls: ['./missionsclient.component.css']
})
export class MissionsclientComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  annonce(){
    this.router.navigate(["/annonce"])
  }
}
