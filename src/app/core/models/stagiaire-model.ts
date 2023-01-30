export class StagiaireModel {
    split(arg0: string) {
      throw new Error('Method not implemented.');
    }
    protected  _id : number =0 ;
    protected _lastName: string = '';
    protected _firstName: string = '';
    protected _gender: string = '';
    protected _birthDate?: Date | undefined;
    protected _phoneNumber: string = '';
    protected _email: string = ''; 


    public setStagiaireModelPart(stagiaireModel : StagiaireModel){
      this._id = stagiaireModel.id ;
      this._lastName=stagiaireModel.lastName;
      this._firstName=stagiaireModel.firstName;
      this._gender=stagiaireModel.gender;
      this._birthDate=stagiaireModel.birthDate;
      this._phoneNumber=stagiaireModel.phoneNumber;
      this._email=stagiaireModel.email; 
    }

    get id() {
      return this._id
    }
    
    set id(val: number) {
      this._id = val
    }
    
    get lastName() {
      return this._lastName
    }
    
    set lastName(val: string) {
      this._lastName = val
    }
    
    get firstName() {
      return this._firstName
    }
    
    set firstName(val: string) {
      this._firstName = val
    }
    
    get gender() {
      return this._gender
    }
    
    set gender(val: string) {
      this._gender = val
    }
    
    get birthDate(): Date | undefined {
      return this._birthDate
    }
    
    set birthDate(val: Date | undefined) {
      this._birthDate = val
    }
    
    get phoneNumber() {
      return this._phoneNumber
    }
    
    set phoneNumber(val: string) {
      this._phoneNumber = val
    }
    
    get email() {
      return this._email
    }
    
    set email(val: string) {
      this._email = val
    }




}
