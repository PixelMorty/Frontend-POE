import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Choice } from '../models/survey-models/choice.model';
import { Question } from '../models/survey-models/question.model';

@Injectable({
  //dispo à partir de la racine du projet
  providedIn: 'root',
})
export class QuestionService {
  private static readonly CONTROLLER_PATH: String = `${environment.api}questions`;

    public constructor(
        //service qui permet d'envoyer de la requete http
        private httpClient: HttpClient
      ) {}

  public getOne(id: number): Observable<Question> {
    return this.httpClient.get<Question>(
      `${QuestionService.CONTROLLER_PATH}/${id}`
    );
  }

  public getFavorites(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(
      `${QuestionService.CONTROLLER_PATH}/favorites`
    );
  }

  public getAll(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(
      `${QuestionService.CONTROLLER_PATH}`
    );
  }

  
  public cloneur(question : Question) : Question{
    const cloneQuestion = new Question();
    cloneQuestion.questionType=question.questionType;
    cloneQuestion.id=question.id;
    cloneQuestion.title=question.title;
    cloneQuestion.choices=question.choices.map((c)=>{
      const choi = new Choice();
      choi.id=0;
      choi.name=c.name;
      return choi;
    });
    cloneQuestion.favorite = question.favorite

      
    return  cloneQuestion;
  }


    public delete(id:number){
         this.httpClient.delete(`${QuestionService.CONTROLLER_PATH}/${id}`) ;
    }


    public add(question:Question): Observable<Question>{
        return this.httpClient.post<Question>(`${QuestionService.CONTROLLER_PATH}`,question) ;
    }

    public update(id :number,question:Question): Observable<Question>{
        return this.httpClient.patch<Question>(`${QuestionService.CONTROLLER_PATH}/${id}`,question) ;
    }
  }
