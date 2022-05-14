import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { JobService } from '../service/job.service';
import { Job } from '../models/job.model';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  newJob = new Job();

  message! :string;

  invalid=false;
  jobOffer = new FormGroup({
    service: new FormControl('',[Validators.required]),
    ville: new FormControl('',[Validators.required]),
    addresse: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    prix: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
  });
  constructor(private jobService : JobService,private router : Router,private authService : AuthenticationService) { }


 

 
  ngOnInit(): void {
    
    
  }


  addJob() {
   // console.log(this.newJob);
   if(this.jobOffer.valid){
     let user = this.authService.user;
     let job =  {nom:"Wiem Ben Ali" , date : this.jobOffer.value.date, description:this.jobOffer.value.description, services : this.jobOffer.value.service , adresse : this.jobOffer.value.adresse, ville : this.jobOffer.value.ville , prix : this.jobOffer.value.prix , telephone:"25546987" }
    this.jobService.ajouterJob(job);
   this.message = "Votre annonce posté " ;
    this.router.navigate(["/job"]);
   }else{
    this.invalid=true;
   }


  }


}
