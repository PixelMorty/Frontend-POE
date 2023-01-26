import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ControlType } from "src/app/shared/type/control-type";
import { Forms } from "../core/forms/forms";
import { UserModel } from "../core/models/user-model";



export class FormUser extends Forms{
    //_model any
    // _form FormGroup

    constructor(user : UserModel){
        super();
        this._model = user;
        this.controlsMap= new Map<string, ControlType>([//TODO METTRE BON VALIDATEURS
        ['username', {control : new FormControl(), validators : [Validators.required]} ],
        ['password', {control : new FormControl(), validators : []} ],

    ]);
    this.buildForm();
    }



}
