import { Poe } from "./poe";
import { StagiaireModel } from "./stagiaire-model";

export class Detailtrainee extends StagiaireModel{
    private _poe! : Poe;


    get poe() {
        return this._poe;
    } 
    set poe(poe : Poe){
        this._poe=poe;
    }
    
}
