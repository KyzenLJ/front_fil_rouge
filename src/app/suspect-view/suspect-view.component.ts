import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';
import { SuspectService } from '../services/suspect.service';
import { Suspect } from '../suspect';

@Component({
  selector: 'app-suspect-view',
  templateUrl: './suspect-view.component.html',
  styleUrls: ['./suspect-view.component.css']
})
export class SuspectViewComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  suspects: Suspect[];
  displayedColumns = ['nom', 'prenom', 'ville', 'condamnations', 'documents', 'affaires'];
  dataSource = new MatTableDataSource();

  constructor(private suspectService: SuspectService) { }

  ngOnInit() {
    this.suspectService.getAllSupects().subscribe(
      (data) => this.suspects = this.dataSource.data = data
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  rowClicked(row: any) {
   // const obj = JSON.parse(row);
    console.log(row);
  }
}


