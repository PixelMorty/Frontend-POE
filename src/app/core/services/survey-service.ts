import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Survey } from "../models/survey-models/survey.model";
import { Observable } from 'rxjs';
@Injectable({
    //dispo à partir de la racine du projet
    providedIn: 'root',
  })
  export class SurveyService {
    //pour switcher entre fakeApi et api
    private static readonly CONTROLLER_PATH: string = `${environment.api}trainees`;
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

    public findOne(id: number) : Observable<Survey>{
        
        return new Observable<Survey>();
    }
}