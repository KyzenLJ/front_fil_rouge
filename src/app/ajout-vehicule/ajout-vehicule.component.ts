import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, NgForm } from '@angular/forms';
import { Profil } from '../profil';
import { ProfilServiceService } from '../profil-service.service';
import { Vehicule } from '../vehicule';
import { VehiculesService } from '../vehicule.service';
import { Router } from '@angular/router';
import {MatTableDataSource,  MatDialog,  MatDialogConfig,  MatSort,  MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-ajout-vehicule',
  templateUrl: './ajout-vehicule.component.html',
  styleUrls: ['./ajout-vehicule.component.css']
})
export class AjoutVehiculeComponent implements OnInit {


  errText: string;
  vehiculeForm: FormGroup;
  immatControl : FormControl;

  // tslint:disable-next-line:max-line-length
  constructor( private snackBar:MatSnackBar, private formBuilder: FormBuilder, private profilService: ProfilServiceService, private vehiculeService: VehiculesService, private router: Router) {
   }

   onSubmit() {

    const formValue = this.vehiculeForm.value;
    const newVehicule = new Vehicule (
      formValue['marque'],
      formValue['modele'],
      formValue['couleur'],
      formValue['immatriculation'],
    );
    console.log(newVehicule);
    this.vehiculeService.creationVehicule(newVehicule).subscribe(
      result => this.router.navigateByUrl('/index/gestion/listeVehicules'),
      error => {this.afficherMessage('', 'Immatriculation déjà saisie pour un autre véhicule'); }
   // this.router.navigate(['vehicules']);
    );

   }

   afficherMessage(message:string, erreur: string){
    this.snackBar.open(message,erreur, {
      duration: 2000,
    });
   }


  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.vehiculeForm = this.formBuilder.group({
      marque: '',
      modele: '',
      couleur: '',
      immatriculation:'',

    });
  }

}