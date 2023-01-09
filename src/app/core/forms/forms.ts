import { FormGroup } from "@angular/forms";

export abstract class Forms {
 protected _model : any ;
 protected _form! : FormGroup ;

get form(): FormGroup {
  return this._form
}
}

