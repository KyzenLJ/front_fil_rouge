import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-suspect-form',
  templateUrl: './suspect-form.component.html',
  styleUrls: ['./suspect-form.component.css']
})
export class SuspectFormComponent implements OnInit {

  formSuspect: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    
  }

  

  ngOnInit() {

    this.formSuspect = this.fb.group({

      prenomSuspect:'',
      nomSuspect: '',
      dateDeNaissanceSuspect: '',
      telephoneSuspect: '',

    })

  }

}
