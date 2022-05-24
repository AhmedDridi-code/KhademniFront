import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { PacksComponent } from './packs/packs.component';
import { PayementComponent } from './payement/payement.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { Sinscrire2Component } from './sinscrire2/sinscrire2.component';
import { Sinscrire1Component } from './sinscrire1/sinscrire1.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConditionGeneraleComponent } from './condition-generale/condition-generale.component';

import { JobComponent } from './job/job.component';

import { UserjobbeurComponent } from './userjobbeur/userjobbeur.component';

import { AnnonceComponent } from './annonce/annonce.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MissionsComponent } from './missions/missions.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { NotesComponent } from './notes/notes.component';
import { CategorieComponent } from './categorie/categorie.component';
import { RecoverComponent } from './recover/recover.component';
import { ProfiljobbeurComponent } from './profiljobbeur/profiljobbeur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashservicesComponent } from './dashservices/dashservices.component';
import { DashjobbeursComponent } from './dashjobbeurs/dashjobbeurs.component';
import { DashclientsComponent } from './dashclients/dashclients.component';
import { DashcontactComponent } from './dashcontact/dashcontact.component';

import { UserclientComponent } from './userclient/userclient.component';
import { MissionsclientComponent } from './missionsclient/missionsclient.component';
import { StatistiqueclientComponent } from './statistiqueclient/statistiqueclient.component';

import { ProfilclientComponent } from './profilclient/profilclient.component';
import { DashbordJobberComponent } from './dashbord-jobber/dashbord-jobber.component';
import { PostulationsComponent } from './postulations/postulations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './star/star.component';
import { ProfileJobberComponent } from './profile-jobber/profile-jobber.component';
import { AuthInterceptor } from './auth.interceptor';
import { FilterPipe } from './pipes/filter.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { DashbordMissionsComponent } from './dashbord-missions/dashbord-missions.component';







@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,

    JobComponent,
    PacksComponent,
    PayementComponent,

    ContactComponent,
    InscriptionComponent,
    Sinscrire2Component,
     Sinscrire1Component,
     ConnexionComponent,
     ConditionGeneraleComponent,
     UserjobbeurComponent,

     AnnonceComponent,

      MissionsComponent,
      StatistiqueComponent,
      NotesComponent,
      CategorieComponent,
      RecoverComponent,
      ProfiljobbeurComponent,
      DashboardComponent,
      DashservicesComponent,
      DashjobbeursComponent,
      DashclientsComponent,
      DashcontactComponent,
     
      UserclientComponent,
      MissionsclientComponent,
      StatistiqueclientComponent,
    
      ProfilclientComponent,
           DashbordJobberComponent,
           PostulationsComponent,
           StarComponent,
           ProfileJobberComponent,
           FilterPipe,
           PopupComponent,
           DashbordMissionsComponent,

        
     
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    NgbModule,
    MatDialogModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
   