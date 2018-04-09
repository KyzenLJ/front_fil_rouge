import { Component, OnInit, Input } from '@angular/core';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';
import { ProfilServiceService } from '../profil-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
selector: 'app-gestion-droits',
templateUrl: './gestion-droits.component.html',
styleUrls: ['./gestion-droits.component.css']
})

export class GestionDroitsComponent implements OnInit {

estSelect = false;
agents: any[];
profil: string;
agentSelected: Agent;
profils = [];
agentSubscription = Subscription;

constructor(private agentService: AgentService, private profilService: ProfilServiceService) { }

ngOnInit() {
  this.agentService.agentsSusbject.subscribe(
    (agent: any[]) => {
      this.agents = agent;
    }
  );
  this.agentService.emitAgentSubject();
}

// getAllAgent(): void {
//   this.agentService.getAllAgent().subscribe(agents => this.agents = agents);
// }

// deleteAgent() {
//   this.agentService.deleteAgent(this.agentSelected.id).subscribe(() => this.getAllAgent());
// }

agentSelectionne(agent: Agent) {
  this.agentSelected = agent;
  this.estSelect = true;
}

// updateProfil() {
//   this.agentService.updateAgent(this.agentSelected.id, this.agentSelected).subscribe(() => this.getAllAgent());
// }

}
