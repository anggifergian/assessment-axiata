import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const prev = route.routeConfig.path;

    if (this.authService.isLoggedIn()) { return true; }

    this.router.navigate(['/login'], {
      state: { prev }
    });
    return false;
  }
}
