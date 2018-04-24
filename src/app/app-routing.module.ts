import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordeonRechercheComponent } from './accordeon-recherche/accordeon-recherche.component';
import { AffichageRechercheComponent } from './affichage-recherche/affichage-recherche.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { ProfilComponent } from './profil/profil.component';
import { GestionDroitsComponent } from './gestion-droits/gestion-droits.component';
import { HotlistComponent } from './hotlist/hotlist.component';
import { GestionAffaireComponent } from './gestion-affaire/gestion-affaire.component';
import { SuspectFormComponent } from './suspect-form/suspect-form.component';
import { ArmeFormComponent } from './arme-form/arme-form.component';
import { VehiculeFormComponent } from './vehicule-form/vehicule-form.component';
import { AffaireFormComponent } from './affaire-form/affaire-form.component';
import { Page404Component } from './page-404/page-404.component';
import { MatSelectModule } from '@angular/material/select';
import { SuppressionAgentComponent } from './suppression-agent/suppression-agent.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth-guard.service';
import { AgentViewComponent } from './agent-view/agent-view.component';
import { GestionViewComponent } from './gestion-view/gestion-view.component';
import { AgentInfoComponent } from './agent-info/agent-info.component';
import { AjoutAgentComponent } from './ajout-agent/ajout-agent.component';
import { ModifierAgentComponent } from './modifier-agent/modifier-agent.component';
import { SuspectViewComponent } from './suspect-view/suspect-view.component';
import { AjoutArmeComponent } from './ajout-arme/ajout-arme.component';
import { ListeArmesComponent } from './liste-armes/liste-armes.component';
import { AjoutVehiculeComponent } from './ajout-vehicule/ajout-vehicule.component';
import { ListeVehiculesComponent } from './liste-vehicules/liste-vehicules.component';
import { ListeAffairesComponent } from './liste-affaires/liste-affaires.component';
import { AjoutAffaireComponent } from './ajout-affaire/ajout-affaire.component';
import { VehiculeInfoComponent } from './vehicule-info/vehicule-info.component';
import { ModifierVehiculeComponent } from './modifier-vehicule/modifier-vehicule.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'index',
    /*canActivate: [AuthGuardService],*/ component: IndexComponent,
    children: [
      { path: '', redirectTo: 'hotlist', pathMatch: 'full' },

      {
        path: 'accordeon-recherche',
        component: AccordeonRechercheComponent,
        children: [
          { path: 'suspect-form', component: SuspectFormComponent },
          { path: 'arme-form', component: ArmeFormComponent },
          { path: 'affaire-form', component: AffaireFormComponent },
          { path: 'affaire-form', component: AffaireFormComponent },
          { path: 'vehicule-form', component: VehiculeFormComponent }
        ]
      },

      { path: 'affichage-recherche', component: AffichageRechercheComponent },

      { path: 'profil', component: ProfilComponent },

      {
        path: 'gestion',
        component: GestionViewComponent,
        children: [
          { path: 'agents', component: AgentViewComponent },
          { path: 'agents/:id', component: ModifierAgentComponent },
          { path: 'creationAgent', component: AjoutAgentComponent },
          { path: 'ajoutArme', component: AjoutArmeComponent },
          { path: 'listeArmes', component: ListeArmesComponent },
          { path: 'ajoutAffaire', component: AjoutAffaireComponent },
          { path: 'listeAffaires', component: ListeAffairesComponent },
          { path: 'ajoutVehicule', component: AjoutVehiculeComponent },
          { path: 'listeVehicules', component: ListeVehiculesComponent },
          { path: 'listeVehicules/:id', component: ModifierVehiculeComponent },
          { path: 'suspects', component: SuspectViewComponent }
        ]
      },

      { path: 'gestion-droits', component: AgentViewComponent },

      { path: 'gestion-affaire', component: GestionAffaireComponent },

      {
        path: 'hotlist',
        /*canActivate: [AuthGuardService],*/ component: HotlistComponent
      },

      { path: 'suppression-agent', component: SuppressionAgentComponent }
    ]
  },

  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
