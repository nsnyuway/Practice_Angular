import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const canActivateRoute = this.checkCondition();
    route.data = { timePassed: !canActivateRoute };
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    const canLoadRoute = this.checkCondition();
    return canLoadRoute;
  }

  private checkCondition(): boolean {
    const currentHour = new Date().getHours();
    console.log(currentHour);
    return currentHour >= 9 && currentHour < 22;
  }
}
