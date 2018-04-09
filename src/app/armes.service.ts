import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Arme } from './arme';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class ArmesService {

  constructor(private http: HttpClient) {}

  private armes: Arme[];

  private armeUrl = 'http://localhost:8080/api/arme';

  public creationArme (arme : Arme) {

    console.log('Création de l\'arme');
    return this.http.post<Arme>(this.armeUrl, arme, httpOptions);
   
  }

  public getAllArme(): Observable<Arme[]> {

    return this.http.get<Arme[]>(this.armeUrl);
    
    }

 
}
