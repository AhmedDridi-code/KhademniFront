import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  job(){
    this.router.navigate(["/job"])}
}
