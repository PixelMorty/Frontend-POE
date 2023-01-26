import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/core/models/user-model';
import { UserService } from 'src/app/core/services/user.service';
import { FormUser } from '../form-user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public form !: FormGroup;
  private usermodel !: UserModel;

  constructor(
    private router : Router,
    private userService : UserService,
  ) { }

  ngOnInit(): void {
    this.form = new FormUser (this.usermodel).form

  }


}


// todo:
// construire le composant signIn avec :  ng g component signIn
// -signIn.ts:
//     injecter dans le constructeur UserService
//     déclarer deux attributs public
// sign-in
