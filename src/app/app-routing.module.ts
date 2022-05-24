import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';


import { AnnonceComponent } from './annonce/annonce.component';

import { CategorieComponent } from './categorie/categorie.component';

import { ConditionGeneraleComponent } from './condition-generale/condition-generale.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashbordJobberComponent } from './dashbord-jobber/dashbord-jobber.component';
import { DashbordMissionsComponent } from './dashbord-missions/dashbord-missions.component';
import { DashclientsComponent } from './dashclients/dashclients.component';
import { DashcontactComponent } from './dashcontact/dashcontact.component';
import { DashjobbeursComponent } from './dashjobbeurs/dashjobbeurs.component';
import { DashservicesComponent } from './dashservices/dashservices.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { JobComponent } from './job/job.component';


import { MissionsComponent } from './missions/missions.component';
import { MissionsclientComponent } from './missionsclient/missionsclient.component';
import { NotesComponent } from './notes/notes.component';


import { PacksComponent } from './packs/packs.component';


import { PayementComponent } from './payement/payement.component';
import { PostulationsComponent } from './postulations/postulations.component';
import { ProfilclientComponent } from './profilclient/profilclient.component';
import { ProfileJobberComponent } from './profile-jobber/profile-jobber.component';
import { ProfiljobbeurComponent } from './profiljobbeur/profiljobbeur.component';
import { RecoverComponent } from './recover/recover.component';
import { Sinscrire1Component } from './sinscrire1/sinscrire1.component';
import { Sinscrire2Component } from './sinscrire2/sinscrire2.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { StatistiqueclientComponent } from './statistiqueclient/statistiqueclient.component';
import { UserclientComponent } from './userclient/userclient.component';
import { UserjobbeurComponent } from './userjobbeur/userjobbeur.component';

const routes: Routes = [
  
  {path : "accueil" , component : AccueilComponent},

 {path : "annonce" , component : AnnonceComponent}, 
  {path : "packs" , component : PacksComponent},
  {path : "dashbordJobber" , component : DashbordJobberComponent, children:[ {
    path : "postulations", component :PostulationsComponent
  },
  {
    path : "missions", component :DashbordMissionsComponent
  } ]},
  {path : "payement" , component : PayementComponent},
  {path : "contact" , component : ContactComponent},
  {path : "inscription" , component : InscriptionComponent},
  {path : "sinscrire2" , component : Sinscrire2Component},
  {path : "sinscrire1" , component : Sinscrire1Component},
  {path : "connexion" , component : ConnexionComponent},
  {path : "ConditionGenerale" , component : ConditionGeneraleComponent},
  {path :"job" , component : JobComponent},
  {path : "userjobbeur" , component : UserjobbeurComponent},
  {path : "missions" , component : MissionsComponent},
  {path : "statistique" , component : StatistiqueComponent},
  {path : "notes" , component : NotesComponent},
  {path : "categorie" , component : CategorieComponent},
  {path : "dashboard" , component : DashboardComponent},
  {path : "profiljobbeur" , component : ProfiljobbeurComponent},
  {path : "dashservices" , component : DashservicesComponent},
  {path : "dashjobbeurs" , component : DashjobbeursComponent},
  {path : "dashclients" , component : DashclientsComponent},
  {path : "dashcontact" , component : DashcontactComponent},
  {path : "userclient" , component : UserclientComponent},
  {path : "missionsclient" , component : MissionsclientComponent},
  {path : "statistiqueclient" , component : StatistiqueclientComponent},
  {path : "profilclient" , component : ProfilclientComponent},
  {path : "recover" , component : RecoverComponent},
  {path : "profilejobbeur/:id" , component : ProfileJobberComponent},
  { path: '**', redirectTo: 'accueil'}


  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
