import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StagiaireModel } from "../models/stagiaire-model";
import { environment } from "./../../../environments/environment";
import { map, take } from 'rxjs/operators';




//@Injectable la classe devient un service, injectable dans tous les constructors
@Injectable({
    //dispo à partir de la racine du projet
    providedIn: 'root'
})
export class StagiaireService {

    //pour switcher entre fakeApi et api
    private static readonly CONTROLLER_PATH: string = `${environment.api}trainees`;
    //private static readonly CONTROLLER_PATH: string = `${environment.fakeApi}stagiaires`;

    public constructor(
        //service qui permet d'envoyer de la requete http
        private httpClient: HttpClient
        
    ){  }

    //CRUD methods: Create, Read, Update, Delete
    public findAll():Observable<StagiaireModel[]>{
        return this.httpClient.get<any[]>(
            StagiaireService.CONTROLLER_PATH
        )
        .pipe(
            take(1), //prends le 1er résultat et arrête d'observer
            map((httpResponseBody: any[]) => {
                return httpResponseBody.map((anyStagiaire: any) => {
                    return this.deserializeFromJson(anyStagiaire)
                }) // transforme un tableau en un autre tableau
            }) //transforme un Observable(ici O<any[]>) en un autre Observable (O<StagiaireModel[]>)
        ) //pipeline
    }

    public findOne(id: number): Observable<StagiaireModel> {
        return this.httpClient.get<any>(
            `${StagiaireService.CONTROLLER_PATH}/${id}` // http://localhost:3000/stagiaires/2
        )
        .pipe(
            take(1), //récupère l'objet qui vient de l'API
            map((anyStagiaire: any) => { // transforme le any en StagiaireModel
                    return this.deserializeFromJson(anyStagiaire); // deserialise pour le transformer en StagiaireModel
                }) 
        )
         
    }

    // public create(datas: any): Observable<StagiaireModel> {
    //     console.log(`Values received by service : ${JSON.stringify(datas)}`);
    //     /**
    //      * {
    //      *  lastName: "...",
    //      *  firstName: "...",
    //      *  gender: "...",
    //      *  birthDate: "...",
    //      *  phoneNumber: "...",
    //      *  email: "..."
    //      * }
    //      */
    //     // Get the next id before to send to backend
    //     return this.findAll()
    //     .pipe(
    //         take(1),
    //         map((stagiaires: StagiaireModel[]) => {
    //             // Compute nextId
    //             let nextId = 1;
    //             if (stagiaires.length) {
    //                 nextId = stagiaires.sort((s1: StagiaireModel, s2: StagiaireModel) => s2.id - s1.id)[0].id + 1
    //             }
    //             datas.id = nextId;
    //             const stagiaire: StagiaireModel = this.deserialize(datas);
    //             // POST the stagiaire completed
    //             this.httpClient.post<StagiaireModel>(
    //                 StagiaireService.CONTROLLER_PATH,
    //                 datas
    //             ).subscribe();
    //             return stagiaire;
    //         })
    //     )
    // }

    public create(datas: any): Observable<StagiaireModel> {
        // console.log(Values received by service : ${JSON.stringify(datas)});
        console.log("Values received by service:", datas);

        // POST the stagiaire completed
        return this.httpClient.post<StagiaireModel>(
            StagiaireService.CONTROLLER_PATH,
            this.serializeJson(datas)
            //datas
        )
        .pipe(
            take(1), // Récupère l'objet qui vient de l'API
            map((anyStagiaire: any) => { // Transforme le any en StagiaireModel
                return this.deserializeFromForm(anyStagiaire);
            })
        )
    }

    public update(datas:any):void{}

    public delete(datas:StagiaireModel):Observable<HttpResponse<any>>{
        return this.httpClient.delete<any>(
            `${StagiaireService.CONTROLLER_PATH}/${datas.id}`,
            {
                observe:'response' // HttpResponse {status:200etqq pour ok, redirection: 300etqq, client error: 400etqq}
            }
        )
    }
//du back vers le front
    public deserializeFromJson(anyStagiaire: any): StagiaireModel {
        const stagiaire: StagiaireModel = new StagiaireModel();
        stagiaire.id = anyStagiaire.id;
        stagiaire.lastName = anyStagiaire.lastname;
        stagiaire.firstName = anyStagiaire.firstname;
        stagiaire.birthDate = new Date (anyStagiaire.birthdate);
        stagiaire.gender = anyStagiaire.gender;
        stagiaire.phoneNumber = anyStagiaire.phoneNumber;
        stagiaire.email = anyStagiaire.email

        return stagiaire;
    }
//du front vers le back
    public serializeJson(anyStagiaire: any): any {
        const stagiaire: any = {
            id : anyStagiaire.id,
            lastname : anyStagiaire.lastName,
            firstname : anyStagiaire.firstName,
            birthdate : new Date (anyStagiaire.birthDate),
            gender : anyStagiaire.gender,
            phoneNumber : anyStagiaire.phoneNumber,
            email : anyStagiaire.email
        }
        console.log("stagiaire à envoyer au back: ", stagiaire)
        return stagiaire;
    }
//du formulaire au service
    public deserializeFromForm(anyStagiaire: any): StagiaireModel {
        const stagiaire: StagiaireModel = new StagiaireModel();
        stagiaire.id = anyStagiaire.id;
        stagiaire.lastName = anyStagiaire.lastName;
        stagiaire.firstName = anyStagiaire.firstName;
        stagiaire.birthDate = new Date (anyStagiaire.birthDate);
        stagiaire.gender = anyStagiaire.gender;
        stagiaire.phoneNumber = anyStagiaire.phoneNumber;
        stagiaire.email = anyStagiaire.email

        return stagiaire;
    }

   
}

