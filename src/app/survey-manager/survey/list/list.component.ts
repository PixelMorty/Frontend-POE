import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Survey } from 'src/app/core/models/survey-models/survey.model';
import { SurveyService } from 'src/app/core/services/survey-service';
import { StagiairesPoes } from 'src/app/shared/enums/stagiaires-poes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public surveys: Survey[] = [];

  modalRef: BsModalRef | undefined;
  message: string | undefined;

  constructor(
    private router: Router,
    private surveyService: SurveyService,
    private modalService: BsModalService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.surveyService.getAll().subscribe((surveys: Survey[]) => {
      this.surveys = surveys;
    });
  }

  public onSurveyAdd(): void {}

  public onSurveyRemove(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(survey: Survey): void {
    this.message = 'Confirmed!';
    this?.modalRef?.hide();
    this.surveyService
      .delete(survey)
      .subscribe((response: HttpResponse<any>) => {
        this.surveys.splice(
          this.surveys.findIndex((obj: Survey) => obj.id === survey.id),
          1
        );
      });
    this.snackBar.open(
      `Le questionnaire ${survey.id} a été supprimé`,
      'Compris',
      {
        duration: 2500,
      }
    );
  }
  decline(): void {
    this.message = 'Declined!';
    this?.modalRef?.hide();
  }

  // Bouton MENU
  public goToTraineesList(): void {
    this.router.navigate([StagiairesPoes.STAGIAIRES, 'list']);
  }

  public goToTraineesAdd(): void {
    this.router.navigate([StagiairesPoes.STAGIAIRES, 'add']);
  }

  public goToPOESList(): void {
    this.router.navigate([StagiairesPoes.POES, 'list']);
  }

  public goToPOESAdd(): void {
    this.router.navigate([StagiairesPoes.POES, 'add']);
  }
  
  
}
