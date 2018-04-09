import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfilServiceService } from '../profil-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AgentService } from '../agent.service';
import { Agent } from '../agent';

@Component({
  selector: 'app-modifier-agent',
  templateUrl: './modifier-agent.component.html',
  styleUrls: ['./modifier-agent.component.css']
})
export class ModifierAgentComponent implements OnInit {

  id:number;
  agent?: Agent;
  errText: string;
  profilSelected;
  formulaire: NgForm;
  erreur = false;
  majAgent;

  constructor(private profilService: ProfilServiceService, private route: ActivatedRoute,
     private router: Router, private agentService: AgentService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.agentService.getAgent(this.id).subscribe(
      data => this.agent = data
    );
    const libelle = this.agent.profil.libelle;
    this.profilService.getProfil(libelle).subscribe(
      pro => this.profilSelected = pro
      , err => this.errText = 'la requete a echoué' );
      console.log(this.errText);
  }

  onSubmit(form: NgForm) {
    this.formulaire = form;
    const nom = form.value['nom'];
    const prenom = form.value['prenom'];
    const email = form.value['email'];
    const adresse = form.value['adresse'];
    const ville = form.value['ville'];
    const oldMdp = form.value['ancienMdp'];
    const mdp = form.value['password'];
    const profil = form.value['profil'];
    console.log(profil);
    this.recupereObjetProfil(profil);
    console.log(this.profilSelected);
    this.majAgent = new Agent(nom, prenom, adresse, ville, email, mdp, this.profilSelected);
    if (!this.erreur) {
      this.agentService.updateAgent(this.agent.id, this.majAgent).subscribe();
      this.router.navigate(['../']);
    }
  }


   // revoie un l'objet correspondant au status choisi
   recupereObjetProfil(profil: string) {
    this.profilService.getProfil(profil).subscribe( pro => this.profilSelected = pro
      , err => this.errText = 'la requete a echoué' );
   }

   verfier(newMdp) {
     const form = this.formulaire;
     if ((form.value['odlMdp'] && form.value['password']) != null) {
        if ((form.value['odlMdp'] === form.value['password'])) {
          this.errText += 'Le nouveau mot de passe doit etre different de l\'ancien \br';
          this.erreur = true;
        }
      }
   }



}
