import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, NgForm } from '@angular/forms';
import { Vehicule } from '../vehicule';
import { VehiculesService } from '../vehicule.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajout-vehicule',
  templateUrl: './ajout-vehicule.component.html',
  styleUrls: ['./ajout-vehicule.component.css']
})
export class AjoutVehiculeComponent implements OnInit {
  vehicule: Vehicule = new Vehicule();

  ngOnInit(): void {

  }

  constructor(private vehiculesService : VehiculesService)
  { }

  onSubmit(form: NgForm){
    console.log(this.vehicule);
    this.vehiculesService.creationVehicule(this.vehicule)
    .subscribe(data => {
      alert('Le véhicule a bien été ajoutée');

  });
}

}

