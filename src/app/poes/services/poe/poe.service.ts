import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ICrud } from 'src/app/core/interfaces/i-crud';
import { Poe } from 'src/app/core/models/poe';
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

  public update(datas: Poe): Observable<Poe> {
    return this._httpClient
      .patch<Poe>(
        PoeService._CONTROLLER_PATH,
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

    return poe;
  }

  public serializeJson(anyPoe: any): any {
    const poe: any = {
      id: anyPoe.id,
      title: anyPoe.title,
      beginDate: new Date(anyPoe.beginDate),
      endDate: new Date(anyPoe.endDate),
      poeType: anyPoe.poeType,
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

    return poe;
  }
}
