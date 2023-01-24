import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { FormPoe } from 'src/app/core/forms/formPoe';
import { FormStagiaire } from 'src/app/core/forms/FormStagiaire';
import { Detailpoe } from 'src/app/core/models/detailpoe.model';
import { Poe } from 'src/app/core/models/poe';
import { StagiaireModel } from 'src/app/core/models/stagiaire-model';
import { StagiaireService } from 'src/app/core/services/stagiaire-service';
import { PoeService } from 'src/app/poes/services/poe/poe.service';
import { StagiairesPoes } from '../enums/stagiaires-poes';

@Component({
  selector: 'app-formulaire-add-general',
  templateUrl: './formulaire-add-general.component.html',
  styleUrls: ['./formulaire-add-general.component.scss'],
})
export class FormulaireAddGeneralComponent implements OnInit {
  public addForm!: FormGroup; // Groupe de Contrôles de formulaire
  public class_poe_or_Stagiaire!: String;
  public id!: Number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stagiaireService: StagiaireService,
    private poeService: PoeService
  ) {}

  ngOnInit(): void {
    //console.log(this.route.snapshot.pathFromRoot[this.route.snapshot.pathFromRoot.length -2].url.toString())

    this.route.paramMap.subscribe((routeParams) => {
      this.id = new Number(routeParams.get('id'));

      this.route
        .parent!.url.pipe(
          take(1),
          map((r) => r[0].path)
        )
        .subscribe((urlType) => {
          //console.log(urlType)

          JSON.stringify(urlType);
          console.log(urlType);
          console.log(StagiairesPoes.STAGIAIRES);

          //console.log(this.route.snapshot.url[this.route.snapshot.url.length-2].toString())
          if (urlType == StagiairesPoes.STAGIAIRES) {
            this.class_poe_or_Stagiaire = StagiairesPoes.STAGIAIRES;
            // console.log(this.route.snapshot.url[this.route.snapshot.url.length-2].toString())
          } else if (urlType == StagiairesPoes.POES) {
            this.class_poe_or_Stagiaire = StagiairesPoes.POES;
          }
          this.class_poe_or_Stagiaire = urlType;
          if (this.class_poe_or_Stagiaire == StagiairesPoes.STAGIAIRES) {
            this.initFormStagiaire();
          } else if (this.class_poe_or_Stagiaire == StagiairesPoes.POES) {
            this.initFormPoe();
          }
        });
    });
  }

  public onSubmit(): void {
    if (this.id.valueOf() === 0) {
      if (this.class_poe_or_Stagiaire == StagiairesPoes.STAGIAIRES) {
        this.stagiaireService
          .create(this.addForm.value)
          .subscribe((stagiaire: StagiaireModel) => {
            this.router.navigate(['/', StagiairesPoes.STAGIAIRES]);
          });
      } else if (this.class_poe_or_Stagiaire == StagiairesPoes.POES) {
        this.poeService.create(this.addForm.value).subscribe((poe: Poe) => {
          this.router.navigate(['/', StagiairesPoes.STAGIAIRES]);
        });
      }
    } else {
      if (this.class_poe_or_Stagiaire == StagiairesPoes.STAGIAIRES) {
        this.stagiaireService
          .update(this.addForm.value, this.id)
          .subscribe((stagiaire: StagiaireModel) => {
            this.router.navigate(['/', StagiairesPoes.STAGIAIRES]);
          });
      } else if (this.class_poe_or_Stagiaire == StagiairesPoes.POES) {
        this.poeService
          .update(this.addForm.value, this.id)
          .subscribe((poe: Poe) => {
            this.router.navigate(['/', StagiairesPoes.STAGIAIRES]);
          });
      }
    }
  }

  private initFormPoe() {
    if (this.id.valueOf() === 0) {
      this.addForm = new FormPoe(new Poe()).form;
    } else {
      try {
        this.poeService.findOne(this.id.valueOf()).subscribe((poe: Poe) => {
          this.addForm = new FormPoe(poe).form;
        });
        // console.log(JSON.stringify(this.stagiaire));
      } catch (error) {
        this.router.navigate(['/', StagiairesPoes.POES]);
      }
    }
  }

  private initFormStagiaire() {
    if (this.id.valueOf() === 0) {
      this.addForm = new FormStagiaire(new StagiaireModel()).form;
    } else {
      try {
        this.stagiaireService
          .findOne(this.id.valueOf())
          .subscribe((stagiaire: StagiaireModel) => {
            this.addForm = new FormStagiaire(stagiaire).form;
            //TODO CHOPER LE 404 ET REDIRIGER
          });
        // console.log(JSON.stringify(this.stagiaire));
      } catch (error) {
        this.router.navigate(['/', StagiairesPoes.STAGIAIRES]);
      }
    }
  }
}
