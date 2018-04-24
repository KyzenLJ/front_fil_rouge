import { Component, OnInit, Input } from '@angular/core';
import { Vehicule } from '../vehicule';

@Component({
  selector: 'app-vehicule-info',
  templateUrl: './vehicule-info.component.html',
  styleUrls: ['./vehicule-info.component.css']
})
export class VehiculeInfoComponent implements OnInit {

  @Input()
  vehicule: Vehicule;

  constructor() { }

  ngOnInit() {
  }

}