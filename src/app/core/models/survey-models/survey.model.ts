import { Question } from "./question.model";

export class Survey{

    private _id!: number;

    private _title!:String ;


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
    
    get questions() {
      return this._questions
    }
    
    set questions(val: Question[]) {
      this._questions = val
    }

    private  _questions!:Question[];

}