import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Choice } from '../models/survey-models/choice.model';

@Injectable({
  //dispo à partir de la racine du projet
  providedIn: 'root',
})
export class ChoiceService {
  private static readonly CONTROLLER_PATH: String = `${environment.api}choices`;

  public constructor(
    //service qui permet d'envoyer de la requete http
    private httpClient: HttpClient
  ) {}

  public delete(choice: Choice) {
    this.httpClient.delete(`${ChoiceService.CONTROLLER_PATH}`);
  }

  public add(choice: Choice): Observable<Choice> {
    return this.httpClient.post<Choice>(
      `${ChoiceService.CONTROLLER_PATH}`,
      choice
    );
  }
}
