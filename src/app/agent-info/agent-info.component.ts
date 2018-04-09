import { Component, OnInit, Input } from '@angular/core';
import { Agent } from '../agent';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {

  @Input()
  agent: Agent;

  constructor() { }

  ngOnInit() {
  }

}
