import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AffairesService } from '../affaires.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Affaire } from '../affaire';

@Component({
  selector: 'app-liste-affaires',
  templateUrl: './liste-affaires.component.html',
  styleUrls: ['./liste-affaires.component.css']
})

export class ListeAffairesComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  affaires: Affaire[];
  displayedColumns = ['id', 'id_agent', 'titre', 'date_ouverture', 'status', 'date_cloture', 'description'];
  dataSource;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private affaireService: AffairesService) { }

  ngOnInit() {
    this.affaireService.getAllAffaire().subscribe(
      data  => { this.dataSource = new MatTableDataSource(data); 
      this.dataSource.paginator = this.paginator; }
    );
  }


  
}
