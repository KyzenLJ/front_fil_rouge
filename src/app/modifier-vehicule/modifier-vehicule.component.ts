import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfilServiceService } from '../profil-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiculesService } from '../vehicule.service';
import { Vehicule } from '../vehicule';
import {MatTableDataSource,  MatDialog,  MatDialogConfig,  MatSort,  MatSnackBar} from '@angular/material';

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

  constructor( private snackBar:MatSnackBar, private route: ActivatedRoute, private router: Router, private vehiculeService: VehiculesService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadVehicules(this.id);

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
        result => this.router.navigateByUrl('/index/gestion/listeVehicules'),
        error => {this.afficherMessage('', 'Immatriculation déjà saisie pour un autre véhicule'); }
      );
    }
  }
  afficherMessage(message:string, erreur: string){
    this.snackBar.open(message,erreur, {
      duration: 3000,
    });
   }

  loadVehicules(id: number) {
    this.vehiculeService.getVehicule(id).subscribe(
      (data) => {
        this.vehicule = data;
      }
    )}
  
  }
