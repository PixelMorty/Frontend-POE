import { QuestionType } from "../enums-model/question-type";
import { Choice } from "./choice.model";



export class Question{

    private _id! :number  ;

    private _title!:String ;


    private  _questionType !:QuestionType;
    private _choices:Choice[]  = [];


    
    get id() {
      return this._id
    }
    
    set id(val: number) {
      this._id = val
    }
    
    get title() {
      return this._title
    }
    
    set title(val: String) {
      this._title = val
    }
    
    get questionType() {
      return this._questionType
    }
    
    set questionType(val: QuestionType) {
      this._questionType = val
    }
    
    get choices() {
      return this._choices
    }
    
    set choices(val: Choice[]) {
      this._choices = val
    }

  }

    

