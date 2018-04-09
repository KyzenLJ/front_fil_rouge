import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-gestion-view',
  templateUrl: './gestion-view.component.html',
  styleUrls: ['./gestion-view.component.css']
})
export class GestionViewComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatMenuTrigger) trigger2: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
    this.trigger2.openMenu();
  }
  constructor() { }

  ngOnInit() {
  }

}
