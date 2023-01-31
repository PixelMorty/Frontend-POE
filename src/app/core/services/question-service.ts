import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

<<<<<<< HEAD
    public constructor(
        //service qui permet d'envoyer de la requete http
        private httpClient: HttpClient
      ) {}

    public getOne(id : number) : Observable<Question>{
        return this.httpClient.get<Question>(`${QuestionService.CONTROLLER_PATH}/${id}`) ;
    }
    public getAll(): Observable<Question[]>{
        return this.httpClient.get<Question[]>(`${QuestionService.CONTROLLER_PATH}`) ;
    }

    public delete(id:number){
         this.httpClient.delete(`${QuestionService.CONTROLLER_PATH}/${id}`) ;
    }


    public add(question:Question): Observable<Question>{
        return this.httpClient.post<Question>(`${QuestionService.CONTROLLER_PATH}`,question) ;
    }

    public update(id :number,question:Question): Observable<Question>{
        return this.httpClient.patch<Question>(`${QuestionService.CONTROLLER_PATH}${id}`,question) ;
    }
  }
=======
  public getOne(id: number): Observable<Question> {
    return this.httpClient.get<Question>(
      `${QuestionService.CONTROLLER_PATH}/${id}`
    );
  }
  public getAll(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(
      `${QuestionService.CONTROLLER_PATH}`
    );
  }

  public delete(id: number) {
    this.httpClient.delete(`${QuestionService.CONTROLLER_PATH}/${id}`);
  }

  public add(question: Question): Observable<Question> {
    return this.httpClient.post<Question>(
      `${QuestionService.CONTROLLER_PATH}`,
      question
    );
  }

  public update(id: number, question: Question): Observable<Question> {
    return this.httpClient.patch<Question>(
      `${QuestionService.CONTROLLER_PATH}${id}`,
      question
    );
  }
}
>>>>>>> 0b34c367bc0433fa858fb5b57d43e0753c3a1764
