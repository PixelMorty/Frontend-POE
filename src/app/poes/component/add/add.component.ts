import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Poe } from 'src/app/core/models/poe';
import { PoeService } from '../../services/poe/poe.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public addPoeForm!: FormGroup; // Groupe de Contrôles de formulaire

  constructor(
    private formBuilder: FormBuilder,
    private poeService: PoeService,
    private router: Router
  ) { }


  // TODO validators

  ngOnInit(): void {
    this.addPoeForm = this.formBuilder.group({

      title: [
        '',
        Validators.required,
      ],

      beginDate: [
        '',
        [
          Validators.required,
        ]
      ],
      endDate: [
        '',
        [
          Validators.required,
        ]
      ],
      poeType: [
        '', // Default value (here empty)
        // <input placeholder="Helper text..." value="">
        [
          Validators.required // Indique que le contrôle doit impérativement être défini avec une valeur non nulle
        ]
      ],
    });
  }


  public onSubmit(): void {
    console.log(`Values to send : ${JSON.stringify(this.addPoeForm.value)}`);
    this.poeService.create(this.addPoeForm.value)
        .subscribe((poe: Poe) => {
            console.log("Values received from backend", poe);
            this.router.navigate(['/', 'poes']);
            // this.addPoeForm.reset();
    });
  }
}
