import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ControlType } from "src/app/shared/type/control-type";
import { Poe } from "../models/poe";
import { Forms } from "./forms";


export class FormPoe extends Forms{
    //_model any
    // _form FormGroup

    constructor(poe : Poe){
        super();
        this._model = poe;
        this.controlsMap= new Map<string, ControlType>([//TODO METTRE BON VALIDATEURS
        ['title', {control : new FormControl(), validators : [Validators.required]} ],
        ['beginDate', {control : new FormControl(), validators : [Validators.required]} ],
        ['endDate', {control : new FormControl(), validators : [Validators.required]} ],
        ['poeType', {control : new FormControl(), validators : [Validators.required]} ]
    ]);
    this.buildForm();
    }



}