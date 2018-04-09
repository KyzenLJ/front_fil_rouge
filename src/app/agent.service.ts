import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Agent } from './agent';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/vnd.api+json' })
};





@Injectable()
export class AgentService {

  constructor(private http:  HttpClient) {}

  private agents: Agent[];
  agentsSusbject = new Subject<any[]>();

  private agentUrl = 'http://localhost:8080/api/agent';

  public createAgent(agent: Agent) {
    console.log('creation agent');
    return this.http.post<Agent>(this.agentUrl, agent, httpOptions);
  }


  getAgentFromServer() {
    this.getAllAgent().subscribe(
      (data) => {this.agents = data ;
      this.emitAgentSubject();
      }
    );
  }

  public getAllAgent(): Observable<Agent[]> {
      return this.http.get<Agent[]>(this.agentUrl);
  }

  public getAgent(id: number): Observable<Agent> {
    const url = `${this.agentUrl}/${id}`;
    return this.http.get<Agent>(url);
  }

  public deleteAgent(id: number): Observable<Agent> {
    console.log('suppression agent');
    const url = `${this.agentUrl}/${id}`;
    console.log(url);
    return this.http.delete<Agent>(url, httpOptions);
    // this.emitAgentSubject();
  }

  public updateAgent(id: number, agent: Agent): Observable<any> {
    const url = `${this.agentUrl}/${id}`;
    console.log(url)
    return this.http.put(url, agent, httpOptions);
  }

  emitAgentSubject() {
    this.agentsSusbject.next(this.agents.slice());
  }



}
