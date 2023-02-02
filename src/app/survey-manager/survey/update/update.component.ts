import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionType } from 'src/app/core/models/enums-model/question-type';
import { Question } from 'src/app/core/models/survey-models/question.model';
import { Survey } from 'src/app/core/models/survey-models/survey.model';
import { QuestionService } from 'src/app/core/services/question-service';
import { SurveyService } from 'src/app/core/services/survey-service';
import {
  CdkDragDrop,
  CdkDropList,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { watchFile } from 'fs';
import { combineLatest, forkJoin, Observable } from 'rxjs';

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
  private questionsListFromBack!: Question[];
  public questionsSurvey!: Question[];
  private surveyId!: Number;
  public survey!: Survey;

  constructor(
    private surveyService: SurveyService,
    private questionService: QuestionService,
    private activatedRoute: ActivatedRoute
  ) {}

  //TODO recupérer les choices du back (findByTitle)

  initQuestionsTypes(): void {
    this.questionsList = this.questionsListFromBack;

   // console.log("qlfb",this.questionsListFromBack)
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((routeparams) => {
      //récup id du survey
      this.surveyId = new Number(routeparams.get('id'));
      // trouver le survey
      try {
        this.questionService
          .getFavorites()
          .subscribe((questions: Question[]) => {
            this.questionsListFromBack = questions;
            this.initQuestionsTypes();
          });
        // this.questionService.getAll().subscribe((questions) => {
        //   this.questionsList = questions;
        // });
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
  }

  // addQuestionCurrent(question: Question): void {
  //   this.questionsSurvey.push(question);
  // }

  // deleteQuestionCurrent(questionToDelete: Question): void {
  //   this.questionsSurvey.splice(
  //     this.questionsSurvey.findIndex(
  //       (question: Question) => questionToDelete.id == question.id
  //     )
      
  //   );
  // }
  // onSubmit(): void {
  //   const bob = this.questionsList[0];
  //   console.log(bob.choices.length)
  //    console.log("questioninit",bob);
  //    const bibi = this.questionService.cloneur(bob);
  //    bibi.choices[0].name="jajajaj"
  //    console.log("Question init",bob) 
  //    console.log("Question PAS init",bibi) 
  // }
  onSubmit(): void {
    // pour les questions qui ont un id null creer question et recup id dans une liste
      // dupliquer les choices
      // const idToSave : Number[]= []; 
      // this.questionsSurvey.forEach((q)=> {
      //   if(q.id.valueOf() ==-1){
      //     this.questionService.add(q).subscribe((questionBack)=>{
      //       idToSave.push(questionBack.id);
      //     });
      //   }else{
      //     idToSave.push(q.id);
      //   }

      // });


      // dupliquer les choices
      const questionsToSave = this.questionsSurvey.filter((q)=> q.id.valueOf()==0);
      const questionsToNotSave = this.questionsSurvey.filter((q)=> q.id.valueOf()!=0);
      console.log("questopntosave",questionsToSave)
      console.log("questNOTOSAVE",questionsToNotSave)
      forkJoin(questionsToSave.map((q)=> {
            console.log("question a sauver",q)
            return this.questionService.add(q);
            // .subscribe((questionBack)=>{
            //   idToSave.push(questionBack.id);
            })
        )
          .subscribe((questionsSaved)=>{


            forkJoin(questionsToNotSave.map((q)=> {
              console.log("question a update",q)
              return this.questionService.update(q.id.valueOf(),q);
              // .subscribe((questionBack)=>{
              //   idToSave.push(questionBack.id);
              })
          ).subscribe((resp2)=>{
              console.log("resp",questionsSaved)
              this.surveyService
                .changeQuestions(
                  questionsToNotSave.map((q)=>q.id)
                    .concat(questionsSaved.map((q)=>q.id))
                    .map((n)=> n.valueOf()),
                  this.surveyId.valueOf()
                )
                .subscribe((survey) => {
                  this.survey = survey;
                  
                window.location.reload();
                });
            });
          });

    // // change question sur les id + ceux deja bindés
    // console.log("idtosave",idToSave);
    // console.log("surveyId",this.surveyId.valueOf());
    // this.surveyService
    //   .changeQuestions(
    //     idToSave.map((n)=> n.valueOf()),
    //     this.surveyId.valueOf()
    //   )
    //   .subscribe((survey) => {
    //     this.survey = survey;
    //   });
  }

  // TODO
  // InitquestionsTypes() quand drop du containerQuestionsTypes vers containerQuestionnaire
  // supprimer la question du containerQuestionnaire quand drop de containerQuestionnaire vers n'importe où à l'exterieur de containerQuestionnaire
  // réarranger l'ordre des questions dans le modèle (les tableaux ds le ts)  quand  drop au sein du containerQuestionnaire
  drop(event: CdkDragDrop<Question[]>) {
    this.initQuestionsTypes();
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      //  transferArrayItem(
      //    event.previousContainer.data,
      //    event.container.data,
      //    event.previousIndex,
      //    event.currentIndex
      //  );



     copyArrayItem<Question>(event.previousContainer.data,event.container.data, event.previousIndex,event.currentIndex);
     console.log("choices",event.container.data[event.currentIndex].choices);
     event.container.data[event.currentIndex]= this.questionService.cloneur(event.container.data[event.currentIndex]);
     event.container.data[event.currentIndex].favorite=false;
     event.container.data[event.currentIndex].id=0;


    }

    //copyArrayItem<T = any>(currentArray: T[], targetArray: T[], currentIndex: number, targetIndex: number): void;
    console.log('this.questionsSurvey: ', this.questionsSurvey);
  }
}
