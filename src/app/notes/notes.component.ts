import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  userjobbeur(){
    this.router.navigate(["/userjobbeur"])}
}
