import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-suppression-agent',
  templateUrl: './suppression-agent.component.html',
  styleUrls: ['./suppression-agent.component.css']
})
export class SuppressionAgentComponent implements OnInit {

  agentSelected: Agent;
  agents: any[];
  agentSubject = Subscription;

  constructor(private agentService: AgentService) { }

  ngOnInit() {
    this.agentService.agentsSusbject.subscribe(
      (agents: any[]) => {
        this.agents =   agents;
      }
    );
    this.agentService.emitAgentSubject();
    }

  // getAllAgents(): void{
  //   this.agentService.getAllAgent().subscribe((agents) => this.agents = agents );
  // }

  agentSelect(agent){
    this.agentSelected =  agent;
  }

  deleteAgent(){
    this.agentService.deleteAgent(this.agentSelected.id);//.subscribe(() => this.getAllAgents());
    this.agentService.emitAgentSubject();
  }



}
