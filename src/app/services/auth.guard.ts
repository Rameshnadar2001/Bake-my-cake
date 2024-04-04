import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthserviceService } from './authservice.service';
import { inject } from '@angular/core';
import { RouteServiceService } from './route-service.service';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  let authservice=inject(AuthserviceService);
  let routerService=inject(RouteServiceService)
  if(authservice.isLoggedIn){
    return true;
  }else{
    routerService.toLogin();
    return false;
  }
};
