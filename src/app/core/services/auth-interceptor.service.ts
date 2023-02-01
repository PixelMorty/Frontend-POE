import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UserService } from './user.service';
import { map, take } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  private readonly _noSecuredURIs: string[] = [
    './assets/i18n/fr.json',
    './assets/i18n/en.json',
  ]
  constructor(
    private userservice : UserService,
    private router :  Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log("Interceptor is here with request:", req);
    //TODO1: check if request has to be secured or not
    console.log(req.url)

    //TODO2: retrieve current User if not logged


    //NB: to block request, return throwError() => new Error('No signed user');
      if (this._isNotSecuredURI(req.url)) {
        console.log("Interceptor: URI not secured", req.url)

        return next.handle(req)
      }
    
      if (this.userservice.user == null){
        this.router.navigate(['login']);
        throw new Error('No signed user');

      }else{
        const newReq = req.clone({
          headers: new HttpHeaders(`Authorization:Basic ${this.userservice.user?.password}`)
        });
        console.log("Request with the authorization:", newReq)
        return next.handle(newReq)     
         .pipe(
          catchError((response:HttpErrorResponse, caught$) => {
            if (response.status == 401) {
              console.log("Interceptor: wrong authentication => signout")
              this.userservice.signout()
            } 
            return throwError(() => caught$);
          })
        );;
      }

}

public isUserNull(): boolean {
  if (this.userservice.hasUser$) {
    return true;
  }
  return false;
}


  private _isNotSecuredURI(uri: string): boolean {
    return this._noSecuredURIs.filter(u => u==uri).length > 0
  }

}
export const authInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
}
