import { Type } from "@angular/core";
import { AbstractControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export type ControlType = {
 control : AbstractControl,
 validators : ValidatorFn[]
}
