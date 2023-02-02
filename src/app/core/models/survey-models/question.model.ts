import { QuestionType } from '../enums-model/question-type';
import { Choice } from './choice.model';



export class Question{

    public id! :Number;

    public title!:String;

    public  questionType !:QuestionType;
    public choices:Choice[]  = [];
    public favorite:boolean =false;

   

  public cloneur(): Question {
    const cloneQuestion = new Question();
    cloneQuestion.questionType = this.questionType;
    cloneQuestion.id = this.id;
    cloneQuestion.title = this.title;
    cloneQuestion.choices = this.choices;
    cloneQuestion.favorite = this.favorite;
    return cloneQuestion;
  }

}
