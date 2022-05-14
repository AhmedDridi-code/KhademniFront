import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-jobber',
  templateUrl: './profile-jobber.component.html',
  styleUrls: ['./profile-jobber.component.css']
})
export class ProfileJobberComponent implements OnInit {


  currentRate:number=5;
  title = "star-angular";
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  userjobbeur(){
    this.router.navigate(["/userjobbeur"])}
    missions(){
      this.router.navigate(["/missions"])}
statistique(){
        this.router.navigate(["/statistique"])}
notes(){
          this.router.navigate(["/notes"])}



          //ratings



        
          enter(i:number) {
            this.hoverState = i;
          }
        
          leave(i:number) {
            this.hoverState = 0;
          }
        
          updateRating(i:number) {
            this.rating = i;
          }

}
