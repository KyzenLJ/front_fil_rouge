import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatToolbarModule, MatPaginator, MatPaginatorModule, MatMenuModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { AccordeonRechercheComponent } from './accordeon-recherche/accordeon-recherche.component';
import { AffichageRechercheComponent } from './affichage-recherche/affichage-recherche.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { GestionDroitsComponent } from './gestion-droits/gestion-droits.component';
import { HotlistComponent } from './hotlist/hotlist.component';
import { GestionAffaireComponent } from './gestion-affaire/gestion-affaire.component';
import { SuspectFormComponent } from './suspect-form/suspect-form.component';
import { ArmeFormComponent } from './arme-form/arme-form.component';
import { VehiculeFormComponent } from './vehicule-form/vehicule-form.component';
import { AffaireFormComponent } from './affaire-form/affaire-form.component';
import { FormControl, FormGroup, FormBuilder, FormsModule } from '@angular/forms';

import { ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { Page404Component } from './page-404/page-404.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgentService } from './agent.service';
import { ModifAffaireComponent } from './modif-affaire/modif-affaire.component';
import { SuppressionAgentComponent } from './suppression-agent/suppression-agent.component';
import { ProfilServiceService } from './profil-service.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { AgentViewComponent } from './agent-view/agent-view.component';
import { AgentInfoComponent } from './agent-info/agent-info.component';
import { CommonModule } from '@angular/common';
import { GestionViewComponent } from './gestion-view/gestion-view.component';
import { AjoutAgentComponent } from './ajout-agent/ajout-agent.component';
import { ModifierAgentComponent } from './modifier-agent/modifier-agent.component';
import { SuspectViewComponent } from './suspect-view/suspect-view.component';
import { SuspectService } from './services/suspect.service';
import { HotlistElementComponent } from './hotlist-element/hotlist-element.component';
import { ListeAffairesComponent } from './liste-affaires/liste-affaires.component';
import { ListeArmesComponent } from './liste-armes/liste-armes.component';
import { AjoutArmeComponent } from './ajout-arme/ajout-arme.component';
import { AjoutAffaireComponent } from './ajout-affaire/ajout-affaire.component';
import { AffairesService } from './affaires.service';
import { ArmesService } from './armes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccordeonRechercheComponent,
    AffichageRechercheComponent,
    IndexComponent,
    ProfilComponent,
    GestionDroitsComponent,
    HotlistComponent,
    GestionAffaireComponent,
    SuspectFormComponent,
    ArmeFormComponent,
    VehiculeFormComponent,
    AffaireFormComponent,
    Page404Component,
    ModifAffaireComponent,
    SuppressionAgentComponent,
    AuthComponent,
    AgentViewComponent,
    AgentInfoComponent,
    GestionViewComponent,
    AjoutAgentComponent,
    ModifierAgentComponent,
    SuspectViewComponent,
    HotlistElementComponent,
    ListeAffairesComponent,
    ListeArmesComponent,
    AjoutArmeComponent,
    AjoutAffaireComponent,
    ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    CommonModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule

  ],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],

  providers: [AgentService, ProfilServiceService, AuthService, AuthGuardService,
  SuspectService, AffairesService, ArmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }
