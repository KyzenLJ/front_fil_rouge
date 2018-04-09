import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Agent } from './agent';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class AgentService {

  constructor(private http:HttpClient) {}

  private agentUrl = '/api';

  public createAgent(agent) {
    return this.http.post<Agent>(this.agentUrl, agent);
  }

}
