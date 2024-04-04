import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { ItemDetailComponent } from '../item-detail/item-detail.component';

export const canDeactivateGuard: CanDeactivateFn<ItemDetailComponent> = (
   component:ItemDetailComponent,
    currentRoute:ActivatedRouteSnapshot, 
    currentState:RouterStateSnapshot,
     nextState?:RouterStateSnapshot
  ) => 
{
  return component.canDeactivate?component.canDeactivate():true;
};
