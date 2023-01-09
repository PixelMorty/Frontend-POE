

import { FormControl, Validators } from "@angular/forms";
import { StagiaireModel } from "../models/stagiaire-model";

import { Forms } from "./forms";

export class FormStagiaire extends Forms{
    //_model any
    // _form FormGroup

    constructor(stagiaire: StagiaireModel){
        super();
        this._model = stagiaire;
        this.controlsMap=  new Map([//TODO METTRE BON VALIDATEURS
        ['firstName', {control : new FormControl(), validators : [Validators.required]} ],
        ['lastName', {control : new FormControl(), validators : [Validators.required]} ],
        ['birthDate', {control : new FormControl(), validators : [Validators.required]} ],
        ['phoneNumber', {control : new FormControl(), validators : [Validators.required]} ],
        ['gender', {control : new FormControl(), validators : [Validators.required]} ],
        ['email', {control : new FormControl(), validators : [Validators.required]} ]
    ]);
    this.buildForm();
    }


}