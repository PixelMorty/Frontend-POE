import { FormControl, FormGroup } from "@angular/forms";
import { ControlType } from "src/app/shared/type/control-type";

export abstract class Forms {
 protected _model : any ;
 protected _form! : FormGroup ;
 protected controlsMap! : Map<string,ControlType> ;


get form(): FormGroup {
  return this._form
}

    //construire le form:
    public buildForm(){
      this._form = new FormGroup({});
      this.controlsMap.forEach((controlType : ControlType,key: string)=> {
        controlType.control.setValue(this._model[key])
        controlType.control.setValidators(controlType.validators)
        this._form.addControl(key,controlType.control);
      })


      
  }
}

