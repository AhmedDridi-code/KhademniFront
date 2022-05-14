import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

const baseUrl = '${annonce}/job';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobs : any[] ;
  constructor() {
    this.jobs =[
      {nom:"Nour eddine ben ali"  ,   date : new Date("20/05/2021") , description : " Bonjour, j'ai besoin d'un électricien pour tirer des lignes et les raccorder au compteur.  ", services : "Électricité" , adresse : "Avenue habib bourguiba", ville : "Gabés" , prix : 10 , telephone:50444333  } ,
      {nom :"Ranya jaber" , date : new Date("13/04/2022"), description: " Bonjour, je cherche quelqu'un pour monter un meuble de salle de bain. Merci. ", services : "Démenagement" ,adresse : "Rue de la plage ", ville : "Tunis" , prix : 15, telephone:50222111} ,
      
      {nom:"Radhya ayachi" , date : new Date("15/12/2021"), description: "Bonjour, j ai besoin d un peintre pour repeindre une pièce d environ 20 m2, plafond et murs." , services : "Peinture des murs" , adresse : "Rue margreb arabie", ville : "Gabés" , prix : 15 , telephone:54432233} ,
     
      ];
   }

  listeJobs():any[] {
    return this.jobs;
  }
 

  ajouterJob( job: any){
this.jobs.push(job);
  }
}
