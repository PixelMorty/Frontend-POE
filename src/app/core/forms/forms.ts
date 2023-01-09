import { FormGroup } from "@angular/forms";
import { ControlType } from "src/app/shared/type/control-type";

export abstract class Forms {
 protected _model : any ;
 protected _form! : FormGroup ;
 protected controlsMap! : Map<string,ControlType> ;
get form(): FormGroup {
  return this._form
}

    //construire le form:
    public buildForm(): FormGroup{
      this._form = new FormGroup({});
      this.controlsMap.forEach((value,key)=> {
          this._form.setValidators(value.validators)
          this._form.setValue(this._model[key])
          this._form.addControl(key,value.control);
      })
      return this._form;
      
  }
}

