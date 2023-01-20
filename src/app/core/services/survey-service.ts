import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Survey } from '../models/survey-models/survey.model';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Injectable({
  //dispo à partir de la racine du projet
  providedIn: 'root',
})
export class SurveyService {
  //pour switcher entre fakeApi et api
  private static readonly CONTROLLER_PATH: string = `${environment.api}surveys`;
  //private static readonly CONTROLLER_PATH: string = `${environment.fakeApi}stagiaires`;

  public constructor(
    //service qui permet d'envoyer de la requete http
    private httpClient: HttpClient
  ) {}

  // public update(datas: StagiaireModel, id: Number): Observable<StagiaireModel> {
  //     return this.httpClient
  //       .put<StagiaireModel>(
  //         `${StagiaireService.CONTROLLER_PATH}/${id}`,
  //         this.serializeJson(datas)
  //         //datas
  //       )
  //       .pipe(
  //         take(1), // Récupère l'objet qui vient de l'API
  //         map((anyStagiaire: any) => {
  //           // Transforme le any en StagiaireModel
  //           return this.deserializeFromForm(anyStagiaire);
  //         })
  //       );
  //   }
  // }

  public findOne(id: number): Observable<Survey> {
    return this.httpClient
      .get<Survey>(`${SurveyService.CONTROLLER_PATH}/${id}`)
      .pipe(
        take(1) //prends le 1er résultat et arrête d'observer
        // transforme un tableau en un autre tableau
      ); //transforme un Observable(ici O<any[]>) en un autre Observable (O<StagiaireModel[]>) //pipeline
  }

  public getAll(): Observable<Survey[]> {
    return this.httpClient
      .get<Survey[]>(`${SurveyService.CONTROLLER_PATH}`)
      .pipe(
        take(1) //prends le 1er résultat et arrête d'observer
        // transforme un tableau en un autre tableau
      ); //transforme un Observable(ici O<any[]>) en un autre Observable (O<StagiaireModel[]>) //pipeline
  }


    

    public update(survey :Survey,id:number) : Observable<Survey[]>{
        return this.httpClient.patch<Survey[]>(`${SurveyService.CONTROLLER_PATH}/update/${id}`,survey).pipe(
            take(1), //prends le 1er résultat et arrête d'observer
             // transforme un tableau en un autre tableau
            ) //transforme un Observable(ici O<any[]>) en un autre Observable (O<StagiaireModel[]>)
          ; //pipeline

    }
    public changeQuestions(questionIds:number[],id:number) : Observable<Survey>{
        return this.httpClient.patch<Survey>(`${SurveyService.CONTROLLER_PATH}/change-questions/${id}`,questionIds).pipe(
            take(1), 
            ) 
          ; 

    }

}