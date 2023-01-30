import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _user: UserModel | null = null;
  public hasUser$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);




  
  constructor(private router: Router) { }


  public signin(userForm: any): void {
    this._user = <UserModel> {
      username: userForm.username,
      password: btoa(`${userForm.username}:${userForm.password}`)
    }
    console.log("User service: signin:", this._user)
    this.hasUser$.next(true)
  }

  public signout(): void {
    console.log("User service: signout:", this._user?.username)
    this._user = null;
    this.hasUser$.next(false)
    this.router.navigate(['login']);
  }

  get user() {
    return this._user
  }
  
  set user(val: UserModel | null) {
    this._user = val
  }
  
}


// ngIf
