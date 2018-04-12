import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Vehicule } from './vehicule';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class VehiculesService {

  constructor(private http: HttpClient) {}

  private vehicule: Vehicule[];

  private vehiculeUrl = 'http://localhost:8080/api/vehicule';

  public creationVehicule (vehicule : Vehicule) {

    console.log('Création du véhicule');
    return this.http.post<Vehicule>(this.vehiculeUrl, vehicule, httpOptions);
   
  }

  public getAllVehicule(): Observable<Vehicule[]> {

    return this.http.get<Vehicule[]>(this.vehiculeUrl);
    
    }

 
}
