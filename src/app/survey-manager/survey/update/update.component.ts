import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/core/models/survey-models/survey.model';
import { QuestionService } from 'src/app/core/services/question-service';
import { SurveyService } from 'src/app/core/services/survey-service';

// Page de detail du Survey
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {


  constructor(
    private surveyService: SurveyService,
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    ) {}


  ngOnInit(): void {}

  onSubmit(): void {
    // TODO this.surveyService.changeQuestions(this.listIds, this.idSurvey)
  }
}
