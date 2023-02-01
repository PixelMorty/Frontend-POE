import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthInterceptorService } from 'src/app/core/services/auth-interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class HasUserGuard implements CanActivate {
  constructor(private authInterceptorService: AuthInterceptorService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authInterceptorService.isUserNull();
  }
}
