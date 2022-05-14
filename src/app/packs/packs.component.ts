import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  payement(){
    this.router.navigate(["/payement"])}
}


