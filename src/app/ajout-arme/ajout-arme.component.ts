import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, NgForm } from '@angular/forms';
import { Arme } from '../arme';
import { ArmesService } from '../armes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajout-arme',
  templateUrl: './ajout-arme.component.html',
  styleUrls: ['./ajout-arme.component.css']
})
export class AjoutArmeComponent implements OnInit {
  arme: Arme = new Arme();

  ngOnInit(): void {

  }

  constructor(private armesService : ArmesService)
  { }

  onSubmit(form: NgForm){
    console.log(this.arme);
    this.armesService.creationArme(this.arme)
    .subscribe(data => {
      alert('L\'arme a bien été ajoutée');

  });
}

}
