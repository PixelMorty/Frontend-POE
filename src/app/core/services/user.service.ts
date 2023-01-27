import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _user: UserModel | null = null;


get user() {
  return this._user
}

set user(val: UserModel | null) {
  this._user = val
}


  
  constructor() { }
}


// ngIf
