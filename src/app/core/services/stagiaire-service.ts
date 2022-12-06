import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StagiaireModel } from "../models/stagiaire-model";
import { environment } from "./../../../environments/environment";
import{map, take} from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class StagiaireService {
   private static readonly CONTROLLER_PATH:string =`${environment.api}trainees`;
   // private static readonly CONTROLLER_PATH:string =`${environment.fakeApi}stagiaires`;
                                                    
    public constructor(
        private httpClient: HttpClient
    ) {}

    // CRUD methods : Create Read Update Delete
    public findAll(): Observable<StagiaireModel[]> {
        return this.httpClient.get<any[]>(
            //`${environment.fakeApi}stagiaires`
            StagiaireService.CONTROLLER_PATH
        )
        .pipe(
            take(1), // Prends le premier résultat et arrête d'observer
            map((httpResponseBody: any[]) => {
                return httpResponseBody.map((anyStagiaire: any) => {
                    return this.deserialize(anyStagiaire)
                }) // Transforme un tableau en un autre tableau
            }) // Transforme un Observable (ici O<any[]>) en un autre Observable (O<StagiaireModel[]>)
        ) // pipeline
    }

    public findOne(id: number): Observable<StagiaireModel> {
            return this.httpClient.get<any>(
                //`${environment.fakeApi}stagiaires/${id}`// http://localhost:3000/2
                '${StagiaireService.CONTROLLER_PATH}/${id}'
            )
            .pipe(
                take(1), // Prends le premier résultat et arrête d'observer
                map((httpResponseBody: any) => this.deserialize(httpResponseBody))
            ) 
             // pipeline
        
    }

    public create(datas: any)  {

        console.log(`Values received by service : ${JSON.stringify(datas)}`);
        
            /**
         * {
         *  lastName: "...",
         *  firstName: "...",
         *  gender: "...",
         *  birthDate: "...",
         *  phoneNumber: "...",
         *  email: "..."
         * }
         */
        // Get the next id before to send to backend
        return this.findAll()
        .pipe(
            take(1),
            map((stagiaires: StagiaireModel[]) => {
                // Compute nextId
                let nextId = 1;
                if (stagiaires.length) {
                    nextId = stagiaires.sort((s1: StagiaireModel, s2: StagiaireModel) => s2.id - s1.id)[0].id + 1
                }
                datas.id = nextId;
                const stagiaire: StagiaireModel = this.deserialize(datas);
                // POST the stagiaire completed
                this.httpClient.post<StagiaireModel>(
                  //  `${environment.fakeApi}stagiaires`,
                   StagiaireService.CONTROLLER_PATH,
                    datas
                ).subscribe();
                return stagiaire;
            })
        )
        
        return this.findAll()
        .pipe(
            take(1),
            map((stagiaires: StagiaireModel[]) => {
                // Compute nextId
                let nextId = 1;
                if (stagiaires.length) {
                    nextId = stagiaires.sort((s1: StagiaireModel, s2: StagiaireModel) => s2.id - s1.id)[0].id + 1
                }
                datas.id = nextId;
                const stagiaire: StagiaireModel = this.deserialize(datas);
                // POST the stagiaire completed
                this.httpClient.post<StagiaireModel>(
                    //`${environment.fakeApi}stagiaires`,
                    StagiaireService.CONTROLLER_PATH,
                    datas
                ).subscribe();
                return stagiaire;
            })
        )

        // Get the next id before to send to backend
         this.findAll()
            .subscribe((stagiaires: StagiaireModel[]) => {
                datas.id =1
                if (stagiaires.length){
                  datas.id = stagiaires.reduce( // ca lui crée l'id au json alors qu'il avait pas l'attribut
                      (s1, s2) => {
                          return (s1.id > s2.id ? s1 : s2);
                        }
                  ).id
                }


            })

            // .pipe(
            //     take(1),
            //     map(() => {
            //         return this.deserialize(datas);
            //     })
            // );
    }

    public update(datas: any): void {}

    public delete(datas: StagiaireModel):  Observable<HttpResponse<any>> {
        return this.httpClient.delete<any>(

            //`${environment.fakeApi}stagiaires/${datas.id}`,{
                `${StagiaireService.CONTROLLER_PATH}/${datas.id}`,{
            observe: 'response'// HttpResponse {status: 200 [40x, 50x], body: any}
        }
        )
    }

    public deserialize(anyStagiaire: any): StagiaireModel {
        const stagiaire: StagiaireModel = new StagiaireModel();
        stagiaire.id = anyStagiaire.id;
        stagiaire.lastName = anyStagiaire.lastName;
        stagiaire.firstName = anyStagiaire.firstName;
        stagiaire.birthDate = anyStagiaire.birthDate;
        stagiaire.gender = anyStagiaire.gender;
        stagiaire.email = anyStagiaire.email;
        stagiaire.phoneNumber = anyStagiaire.phoneNumber;

        return stagiaire;
    }
}
