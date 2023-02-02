import { QuestionType } from "../enums-model/question-type";
import { Choice } from "./choice.model";



export class Question{

    public id! :Number;

    public title!:String;

    public  questionType !:QuestionType;
    public choices:Choice[]  = [];
    public favorite:boolean =false;

   

  }

    

