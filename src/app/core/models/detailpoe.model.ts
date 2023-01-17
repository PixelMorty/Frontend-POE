import { Poe } from "./poe";
import { StagiaireModel } from "./stagiaire-model";

export class Detailpoe extends Poe{
    private _trainees: StagiaireModel[] = [];

    get trainees(){
        return this._trainees;
    }
    set trainees(trainees: StagiaireModel[] ){
        this._trainees=trainees;
    }
}
