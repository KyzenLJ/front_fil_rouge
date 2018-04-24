import { Component, OnInit } from '@angular/core';
import { AgentService } from './agent.service';
import { Agent } from './agent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private agentService: AgentService) {}

  agent: Agent[];
  ngOnInit() {
    this.agentService.getAgentFromServer();
  }

}
