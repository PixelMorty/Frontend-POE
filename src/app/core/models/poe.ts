export class Poe {
  protected _id: number=0;
  protected _title: string = '';
  protected _beginDate!: Date; // le point "!" (ne sera pas null)
  protected _endDate!: Date;
  protected _poeType: any; // @todo use an enum instead of any

  // Get et Set methode magique avec Extension TypeScript Getter Setter

  /**
   * @usage const id = myObj.id
   */
  get id()  {
    return this._id;
  }

  set id(val: number) {
    this._id = val;
  }

  get title() {
    return this._title;
  }

  set title(val: string) {
    this._title = val;
  }

  get beginDate() {
    return this._beginDate;
  }

  set beginDate(val: Date) {
    this._beginDate = val;
  }

  get endDate() {
    return this._endDate;
  }

  set endDate(val: Date) {
    this._endDate = val;
  }

  get poeType() {
    return this._poeType;
  }

  set poeType(val: any) {
    this._poeType = val;
  }
}
