import { QuestionType } from "../enums-model/question-type";
import { Choice } from "./choice.model";



export class Question{

    private _id! :number;

    private _title!:String;

    private  _questionType !:QuestionType;
    private _choices:Choice[]  = [];
    private _favorite:boolean =false;

    public clone() : Question{
      const cloneQuestion = new Question()
      cloneQuestion.questionType=this.questionType;
      cloneQuestion.id=this.id;
      cloneQuestion.title=this.title;
      cloneQuestion.choices=this.choices;
      cloneQuestion.favorite = this.favorite
      return cloneQuestion;
    }

        
    get favorite() {
      return this._favorite
    }
    
    set favorite(val : boolean) {
      this.favorite = val
    }
    
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

    

