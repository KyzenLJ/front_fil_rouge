import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ArmesService } from '../armes.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Arme } from '../arme';

@Component({
  selector: 'app-liste-armes',
  templateUrl: './liste-armes.component.html',
  styleUrls: ['./liste-armes.component.css']
})

export class ListeArmesComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  armes: Arme[];
  displayedColumns = ['nomArme', 'typeArme', 'typeMunition', 'numeroSerieArme'];
  dataSource;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private armeService: ArmesService) { }

  ngOnInit() {
    this.armeService.getAllArme().subscribe(
      data  => { this.dataSource = new MatTableDataSource(data); 
      this.dataSource.paginator = this.paginator; }
    );
  }


  
}
