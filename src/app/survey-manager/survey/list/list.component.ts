import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/core/models/survey-models/survey.model';
import { SurveyService } from 'src/app/core/services/survey-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public surveyService!: SurveyService;
  private idSurvey!: Number;
  public survey!: Survey;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((routeParams) => {
      this.idSurvey = new Number(routeParams.get('id'));
      this.surveyService
        .findOne(this.idSurvey.valueOf())
        .subscribe((survey: Survey) => {
          this.survey = survey;
        });
    });

    // TODO A REGARDER !!
    // this.surveyService.getAll().subscribe((survey: Survey) => {
    //   this.survey = survey;
    // });
  }
}
