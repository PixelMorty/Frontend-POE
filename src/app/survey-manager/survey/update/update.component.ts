import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Survey } from 'src/app/core/models/survey-models/survey.model';
import { SurveyService } from 'src/app/core/services/survey-service';

// Page de detail du Survey
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // TODO this.surveyService.change-questions(this.listIds, this.idSurvey)
  }
}
