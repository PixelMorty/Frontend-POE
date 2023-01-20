import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ICrud } from 'src/app/core/interfaces/i-crud';
import { Detailpoe } from 'src/app/core/models/detailpoe.model';
import { Poe } from 'src/app/core/models/poe';
import { StagiaireModel } from 'src/app/core/models/stagiaire-model';
import { ApiPoeType } from 'src/app/core/types/api-poe-type';
import { environment } from 'src/environments/environment';
import { PoesModule } from '../../poes.module';

@Injectable({
  providedIn: 'root',
})
export class PoeService implements ICrud<Poe> {
  private static readonly _CONTROLLER_PATH: string = `${environment.api}poes`;
  constructor(private _httpClient: HttpClient) {}
  findAll(): Observable<Poe[]> {
    return this._httpClient.get<any>(PoeService._CONTROLLER_PATH).pipe(
      take(1),
      map((fromApiPoes: ApiPoeType[]) => {
        return fromApiPoes.map((fromApiPoe: ApiPoeType) => {
          const poe: Poe = new Poe();
          poe.id = fromApiPoe.id;
          poe.title = fromApiPoe.title;
          poe.beginDate = new Date(fromApiPoe.beginDate);
          poe.endDate = new Date(fromApiPoe.endDate);
          poe.poeType = fromApiPoe.poeType;
          poe.description = fromApiPoe.description;
          return poe;
        });
      })
    );
  }

  findOne(id: number): Observable<Poe> {
    return this._httpClient
      .get<any>(`${PoeService._CONTROLLER_PATH}/${id}`)
      .pipe(
        take(1),
        map((anyPoe: any) => {
          return this.deserializeFromJson(anyPoe);
        })
      );
  }
  findOneDetailed(id: Number): Observable<Detailpoe> {
    return this._httpClient
      .get<any>(`${PoeService._CONTROLLER_PATH}/${id}`)
      .pipe(
        take(1),
        map((anyPoe: any) => {
          return this.deserializeFromJsonDetailed(anyPoe);
        })
      );
  }

  create(datas: Poe): Observable<Poe> {
    return this._httpClient
      .post<Poe>(
        PoeService._CONTROLLER_PATH,
        this.serializeJson(datas)
        //datas
      )
      .pipe(
        take(1), // Récupère l'objet qui vient de l'API
        map((anyPoe: any) => {
          // Transforme le any en poe
          return this.deserializeFromForm(anyPoe);
        })
      );
  }


  public update(datas: Poe, id: Number): Observable<Poe> {
    return this._httpClient
      .put<Poe>(
        `${PoeService._CONTROLLER_PATH}/${id}`,
        this.serializeJson(datas)
        //datas
      )
      .pipe(
        take(1), // Récupère l'objet qui vient de l'API
        map((anyPoe: any) => {
          // Transforme le any en StagiaireModel
          return this.deserializeFromForm(anyPoe);
        })
      );
  }

  delete(datas: Poe): Observable<HttpResponse<any>> {
    return this._httpClient.delete<any>(
      `${PoeService._CONTROLLER_PATH}/${datas.id}`,
      {
        observe: 'response',
      }
    );
  }

  public deserializeFromJson(anyPoe: any): Poe {
    const poe: Poe = new Poe();
    poe.id = anyPoe.id;
    poe.title = anyPoe.title;
    poe.beginDate = new Date(anyPoe.beginDate);
    poe.endDate = new Date(anyPoe.endDate);
    poe.poeType = anyPoe.poeType;
    poe.description=anyPoe.description;
    return poe;
  }
  public deserializeFromJsonDetailed(anyPoeDetailed: any): Detailpoe {
    //TODO TOUT REFAIRE MAIS PROPRE
    const detailpoe: Detailpoe = new Detailpoe();
    detailpoe.id = anyPoeDetailed.id;
    detailpoe.title = anyPoeDetailed.title;
    detailpoe.beginDate = new Date(anyPoeDetailed.beginDate);
    detailpoe.endDate = new Date(anyPoeDetailed.endDate);
    detailpoe.poeType = anyPoeDetailed.poeType;
    detailpoe.description=anyPoeDetailed.description;
    anyPoeDetailed.trainees.forEach((stagiaire:any) => {
      console.log(stagiaire)
      detailpoe.trainees.push(
        this.deserializeFromJsonStagiaire(stagiaire)
        );
      
    });
    console.log(detailpoe)
    return detailpoe;

  }
//TODO SUPPRIMER CETTE MERDE
  public deserializeFromJsonStagiaire(anyStagiaire: any): StagiaireModel {
    const stagiaire: StagiaireModel = new StagiaireModel();
    stagiaire.id = anyStagiaire.id;
    stagiaire.lastName = anyStagiaire.lastname;
    stagiaire.firstName = anyStagiaire.firstname;
    stagiaire.birthDate = new Date(anyStagiaire.birthdate);
    stagiaire.gender = anyStagiaire.gender;
    stagiaire.phoneNumber = anyStagiaire.phoneNumber;
    stagiaire.email = anyStagiaire.email;

    return stagiaire;
  }


  public serializeJson(anyPoe: any): any {
    const poe: any = {
      id: anyPoe.id,
      title: anyPoe.title,
      beginDate: new Date(anyPoe.beginDate),
      endDate: new Date(anyPoe.endDate),
      poeType: anyPoe.poeType,
      description:anyPoe.description
    };
    return poe;
  }

  public deserializeFromForm(anyPoe: any): Poe {
    const poe: Poe = new Poe();
    poe.id = anyPoe.id;
    poe.title = anyPoe.title;
    poe.beginDate = new Date(anyPoe.beginDate);
    poe.endDate = new Date(anyPoe.endDate);
    poe.poeType = anyPoe.poeType;
    poe.description = anyPoe.description;
    return poe;
  }
}
