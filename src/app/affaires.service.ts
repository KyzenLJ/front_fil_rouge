import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Affaire } from './affaire';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class AffairesService {

  constructor(private http: HttpClient) {}

  private affaires: Affaire[];

  private affaireUrl = 'http://localhost:8080/api/affaire';

  public creationAffaire (affaire : Affaire) {

    console.log('Création de l\'affaire');
    return this.http.post<Affaire>(this.affaireUrl, affaire, httpOptions);
   
  }

  public getAllAffaire(): Observable<Affaire[]> {

    return this.http.get<Affaire[]>(this.affaireUrl);
    
    }

 
}
