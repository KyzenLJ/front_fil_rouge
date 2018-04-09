import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, NgForm } from '@angular/forms';
import { Affaire } from '../affaire';
import { AffairesService } from '../affaires.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajout-affaire',
  templateUrl: './ajout-affaire.component.html',
  styleUrls: ['./ajout-affaire.component.css']
})
export class AjoutAffaireComponent implements OnInit {
  affaire: Affaire = new Affaire();

  ngOnInit(): void {

  }

  constructor(private affairesService : AffairesService)
  { }

  onSubmit(form: NgForm){
    console.log(this.affaire);
    this.affairesService.creationAffaire(this.affaire)
    .subscribe(data => {
      alert('L\'affaire a bien été ajoutée');

  });
}

}
