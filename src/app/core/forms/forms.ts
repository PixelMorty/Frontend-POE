import { FormGroup } from "@angular/forms";
import { ControlType } from "src/app/shared/type/control-type";

export abstract class Forms {
 protected _model : any ;
 protected _form! : FormGroup ;
 protected controlsMap! : Map<String,ControlType> ;
get form(): FormGroup {
  return this._form
}

    //construire le form:
    public buildForm(): FormGroup{
      this._form = new FormGroup({});
      this.controlsMap.forEach((value,key)=> {
          this._form.setValidators(value.validators)
          this._form.setValue(key)
          this._form.addControl(String(key),value.control);
      })
      return this._form;
      
  }
}

