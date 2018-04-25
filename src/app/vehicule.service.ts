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

  private vehicules: Vehicule[];
  vehiculesSusbject = new Subject<any[]>();

  private vehiculeUrl = 'http://localhost:8080/api/vehicule';

  public creationVehicule (vehicule : Vehicule) {

    return this.http.post<Vehicule>(this.vehiculeUrl, vehicule, httpOptions);
       
  }

  getVehiculeFromServer() {
    this.getAllVehicule().subscribe(
      (data) => {this.vehicules = data ;
      this.emitVehiculeSubject();
      }
    );
  }

  public getAllVehicule(): Observable<Vehicule[]> {
      return this.http.get<Vehicule[]>(this.vehiculeUrl);
  }

  public getVehicule(id: number): Observable<Vehicule> {
    const url = `${this.vehiculeUrl}/${id}`;
    return this.http.get<Vehicule>(url);
  }

  public deleteVehicule(id: number): Observable<Vehicule> {
    console.log('suppression vehicule');
    const url = `${this.vehiculeUrl}/${id}`;
    console.log(url);
    return this.http.delete<Vehicule>(url, httpOptions);
    // this.emitAgentSubject();
  }

  public updateVehicule(id: number, vehicule: Vehicule): Observable<any> {
    const url = `${this.vehiculeUrl}/${id}`;
    console.log(url)
    return this.http.put(url, vehicule, httpOptions);
  }

  emitVehiculeSubject() {
    this.vehiculesSusbject.next(this.vehicules.slice());
  }

 
}
