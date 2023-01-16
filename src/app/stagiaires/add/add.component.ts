import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StagiaireModel } from 'src/app/core/models/stagiaire-model';
import { StagiaireService } from 'src/app/core/services/stagiaire-service';
import { DateLessThan } from 'src/app/core/validators/date-less-than';


import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_DATE_FORMAT } from './my-date-format';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public addStagiaireForm!: FormGroup; // Groupe de Contrôles de formulaire

  constructor(
    private formBuilder: FormBuilder,
    private stagiaireService: StagiaireService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addStagiaireForm = this.formBuilder.group({
      lastName: [
        '', // Default value (here empty)
        // <input placeholder="Helper text..." value="">
        [
          Validators.required // Indique que le contrôle doit impérativement être défini avec une valeur non nulle
        ]
      ],
      firstName: [
        '',
        Validators.required
      ],
      gender: [
        'M'
      ],
      birthDate: [
        '',
        [
          Validators.required,
          DateLessThan.dateLessThan()
        ]
      ],
      phoneNumber: [
        ''
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        ]
      ]
    });
  }

  public onSubmit(): void {
    console.log(`Values to send : ${JSON.stringify(this.addStagiaireForm.value)}`);
    this.stagiaireService.create(this.addStagiaireForm.value)
        .subscribe((stagiaire: StagiaireModel) => {
            console.log("Values received from backend", stagiaire);
            this.router.navigate(['/', 'stagiaires']);
            // this.addStagiaireForm.reset();
    });
  }
}

@NgModule({
  imports: [
    MatInputModule, 
    MatDatepickerModule,
    MomentDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }
  ],
})

export class AppModule { } 
