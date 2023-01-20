

export class Choice{

    private _id!:number;
    private _name!:String;

    get id() {
      return this._id
    }
    
    set id(val: number) {
      this._id = val
    }
    
    get name() {
      return this._name
    }
    
    set name(val: String) {
      this._name = val
    }
}
