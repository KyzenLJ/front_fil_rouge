import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfilServiceService } from '../profil-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiculesService } from '../vehicule.service';
import { Vehicule } from '../vehicule';

@Component({
  selector: 'app-modifier-vehicule',
  templateUrl: './modifier-vehicule.component.html',
  styleUrls: ['./modifier-vehicule.component.css']
})
export class ModifierVehiculeComponent implements OnInit {

  id:number;
  vehicule: Vehicule;
  errText: string;
  // profilSelected;
  formulaire: NgForm;
  erreur = false;
  majVehicule;

  constructor(private route: ActivatedRoute, private router: Router, private vehiculeService: VehiculesService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadVehicules(this.id);
    // console.log(this.agent);
    /*const libelle = this.agent.profil.libelle;
    console.log(libelle + 'coucou');
    this.profilService.getProfil(libelle).subscribe(
      pro => this.profilSelected = pro
      , err => this.errText = 'la requete a echoué' );
      console.log(this.errText);*/
  }

  onSubmit(form: NgForm) {
    this.formulaire = form;
    const marque = form.value['marque'];
    const modele = form.value['modele'];
    const couleur = form.value['couleur'];
    const immatriculation = form.value['immatriculation'];
    this.majVehicule = new Vehicule(marque, modele, couleur, immatriculation);
    console.log(JSON.stringify(this.majVehicule));
    if (!this.erreur) {
      this.vehiculeService.updateVehicule(this.vehicule.id, this.majVehicule).subscribe(
        (data) => this.router.navigateByUrl('/index/gestion/listeVehicules')
      );
    }
  }


  loadVehicules(id: number) {
    this.vehiculeService.getVehicule(id).subscribe(
      (data) => {
        this.vehicule = data;
      }
    )}
  
  }
