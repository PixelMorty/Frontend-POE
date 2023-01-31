import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionType } from 'src/app/core/models/enums-model/question-type';
import { Question } from 'src/app/core/models/survey-models/question.model';
import { Survey } from 'src/app/core/models/survey-models/survey.model';
import { QuestionService } from 'src/app/core/services/question-service';
import { SurveyService } from 'src/app/core/services/survey-service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

// Page de detail du Survey
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})


// TODO transformer les Questions en QuestionLabel~~~ pour pouvoir remplir les infos
// formGroup basé sur une Question 
export class UpdateComponent implements OnInit {
  // questionList ---> questionsTypes : String[] 
  public questionsList: Question[] = [];

  public questionsSurvey!: Question[];
  private surveyId!: Number;
  public survey!: Survey;
  public QuestionType = QuestionType;

  constructor(
    private surveyService: SurveyService,
    private questionService: QuestionService,
    private activatedRoute: ActivatedRoute
  ) {}
  
  // TODO
  // InitquestionsTypes() :void{
  //   this.questionsTypes =[QuestionType.FREE_RESPONSE, QuestionType.QCM,QuestionType.YES_NO]
  // }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((routeparams) => {
      //récup id du survey
      this.surveyId = new Number(routeparams.get('id'));
      // trouver le survey
      try {
        this.questionService.getAll().subscribe((questions) => {
          this.questionsList = questions;
        });
        this.surveyService
          .findOne(this.surveyId.valueOf())
          .subscribe((survey) => {
            this.survey = survey;
            this.questionsSurvey = this.survey.questions;
          });
      } catch (error) {
        //this.router.navigate(['/surveys/']);
      }
    });
      // TODO
  // initQuestionList()
  }

  addQuestionCurrent(question: Question): void {
    this.questionsSurvey.push(question);
  }

  deleteQuestionCurrent(questionToDelete: Question): void {
    this.questionsSurvey.splice(
      this.questionsSurvey.findIndex(
        (question: Question) => questionToDelete.id == question.id
      )
    );
  }

  onSubmit(): void {
    this.surveyService
      .changeQuestions(
        this.questionsSurvey.map((q: Question) => q.id),
        this.surveyId.valueOf()
      )
      .subscribe((survey) => {
        this.survey = survey;
      });
  }

    // TODO
  // InitquestionsTypes() quand drop du containerQuestionsTypes vers containerQuestionnaire
  // supprimer la question du containerQuestionnaire quand drop de containerQuestionnaire vers n'importe où à l'exterieur de containerQuestionnaire
  // réarranger l'ordre des questions dans le modèle (les tableaux ds le ts)  quand  drop au sein du containerQuestionnaire
  drop(event: CdkDragDrop<Question[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dragDisabled(questionOfList: Question): boolean {
    return this.questionsSurvey.some((element) => {
      element.id === questionOfList.id;
    });
  }
}
