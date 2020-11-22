import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsEnterpriseGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth
      .userIsEnterprise()
      .then((res) => {
        if (!res) {
          console.log('entro en el catch');
          this.router.navigate(['/home/stores']);
          return false;
        }
        return true;
      })
      .catch((res) => {
        console.log('entro en el catch');
        this.router.navigate(['/home/stores']);
        return false;
      });
  }
}
