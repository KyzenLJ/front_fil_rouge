import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AgentService } from '../agent.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { Agent } from '../agent';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-view.component.css']
})
export class AgentViewComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  agents: Agent[];
  displayedColumns = ['id', 'nom', 'prenom', 'email', 'status', 'edit', 'delete'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
   this.dataSource.filter = filterValue;
  }

  constructor(private agentService: AgentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.agentService.getAllAgent().subscribe(
      data => this.agents = this.dataSource.data = data
    )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onDelete(id: number) {
    console.log(id);
    this.agentService.deleteAgent(id).subscribe(
      data => this.agents = this.agents.filter(u => u !== data)
       // () => this.router.navigate(['../'], {relativeTo : this.router})
    );
  

  }
}


