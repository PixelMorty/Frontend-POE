import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/core/models/user-model';
import { UserService } from 'src/app/core/services/user.service';
import { StagiairesPoes } from 'src/app/shared/enums/stagiaires-poes';
import { FormUser } from '../form-user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public form !: FormGroup;
  private usermodel: UserModel = new UserModel();

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private userService : UserService,
  ) { }

  ngOnInit(): void {
    this.usermodel.username="user"
    this.usermodel.password="password"
    this.form = new FormUser (this.usermodel).form

  }

  onSubmit(){
    // récuperer qu'il y  a dans le form (info username password)
        // mettre dans Userservice
    this.userService.signin(this.form.value);

    // Si ça spasse bien rediriger vers ????
    this.router.navigate(['/']);//TODO CHANGER : chercher dans ActivatedRoute le parent et en fait revenir sur la page précédente qui a invoqué ce composant
    // si ça spasse mal recharger page + message erreur ~~~~~ 

  }

}


// todo:
// construire le composant signIn avec :  ng g component signIn
// -signIn.ts:
//     injecter dans le constructeur UserService
//     déclarer deux attributs public
// sign-in
