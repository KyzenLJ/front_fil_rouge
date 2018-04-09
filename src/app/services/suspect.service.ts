import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Suspect } from '../suspect';

@Injectable()
export class SuspectService {

  constructor(private httpClient:  HttpClient) { }

  private suspectUrl = 'http://localhost:8080/api/suspect';

  public getAllSupects(): Observable<Suspect[]> {
    return this.httpClient.get<Suspect[]>(this.suspectUrl)
  }

}
