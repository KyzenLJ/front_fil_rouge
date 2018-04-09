import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Profil } from './profil';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProfilServiceService {

  constructor(private http: HttpClient) { }

  private profilUrl = 'http://localhost:8080/api/profil';

  public getAllProfil(): Observable<Profil[]> {
    return this.http.get<Profil[]>(this.profilUrl);
  }

  public getProfil(libelle: string): Observable<Profil>{
    console.log('get profil by string');
    const url = `${this.profilUrl}/${libelle}`;
    return this.http.get<Profil>(url);
  }
}
