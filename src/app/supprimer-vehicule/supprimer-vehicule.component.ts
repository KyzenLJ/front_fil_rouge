import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { VehiculesService } from '../vehicule.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-supprimer-vehicule',
  templateUrl: './supprimer-vehicule.component.html',
  styleUrls: ['./supprimer-vehicule.component.css']
})
export class SupprimerVehiculeComponent implements OnInit {

  vehiculeSelected: Vehicule;
  vehicules: any[];
  vehiculeSubject = Subscription;

  constructor(private vehiculeService: VehiculesService) { }

  ngOnInit() {
    this.vehiculeService.vehiculesSusbject.subscribe(
      (vehicules: any[]) => {
        this.vehicules =   vehicules;
      }
    );
    this.vehiculeService.emitVehiculeSubject();
    }

  // getAllVehicules(): void{
  //   this.vehiculeService.getAllVehicule().subscribe((vehicules) => this.vehicules = vehicules );
  // }
  vehiculeSelect(vehicule){
    this.vehiculeSelected =  vehicule;
  }

  deleteVehicule(){
    this.vehiculeService.deleteVehicule(this.vehiculeSelected.id);//.subscribe(() => this.getAllVehicules());
    this.vehiculeService.emitVehiculeSubject();
  }



}
