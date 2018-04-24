import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { VehiculesService } from '../vehicule.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Vehicule } from '../vehicule';

@Component({
  selector: 'app-liste-vehicules',
  templateUrl: './liste-vehicules.component.html',
  styleUrls: ['./liste-vehicules.component.css']
})

export class ListeVehiculesComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  vehicules: Vehicule[];
  displayedColumns = ['marque', 'modele', 'couleur', 'immatriculation', 'edit' , 'delete'];
  dataSource;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private vehiculeService: VehiculesService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.vehiculeService.getAllVehicule().subscribe(
      data  =>  this.dataSource = new MatTableDataSource(data)
      )
  }

  onDelete(id: number) {
    console.log(id);
    this.vehiculeService.deleteVehicule(id).subscribe(
      data => this.loadData()
       // () => this.router.navigate(['../'], {relativeTo : this.router})
    );
  
    

  }


  
}
