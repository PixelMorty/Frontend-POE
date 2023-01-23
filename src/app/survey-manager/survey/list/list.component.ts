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

  public surveys!: Survey[];
// attributs de tri :
  public ascendingAlphabetic : boolean =true; 
  public ascendingDate : boolean =false;
  constructor(
    private router: Router,
    private  surveyService : SurveyService
    ) {}

  ngOnInit(): void {


    // TODO A REGARDER !!
     this.surveyService.getAll().subscribe((surveys: Survey[]) => {
       this.surveys = surveys;
     });
  }
  
  
}
