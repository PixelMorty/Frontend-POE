import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuestionType } from 'src/app/core/models/enums-model/question-type';
import { Question } from 'src/app/core/models/survey-models/question.model';
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
  public currentQuestions!:Question[];
  private surveyId !: Number;
  public survey !: Survey;
  public QuestionType= QuestionType ;
  constructor(
    private surveyService: SurveyService,
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    private router : Router
    ) {}


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((routeparams)=>{
      //récup id du survey
      this.surveyId = new Number (routeparams.get("id"));
      // trouver le survey
      try{
      this.surveyService.findOne(this.surveyId.valueOf()).subscribe((survey)=>{
         this.survey=survey
         this.currentQuestions = this.survey.questions;
      }
      );
      } catch (error) {
      //this.router.navigate(['/surveys/']);
      }

    // iniit la liste des question change 




    });




    // 

  }


  deleteQuestionCurrent(questionToDelete :Question):void{
    this.currentQuestions.splice(this.currentQuestions.findIndex((question:Question)=>questionToDelete.id==question.id));
    
  }

  addQuestionCurrent(question:Question):void{
    this.currentQuestions.push(question);
    
  }
  onSubmit(): void {
   this.surveyService.changeQuestions(this.currentQuestions.map((q:Question)=>q.id), this.surveyId.valueOf());

  }
}
