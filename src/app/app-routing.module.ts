import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './services/auth.guard';
import { canDeactivateGuard } from './services/can-deactivate.guard';
import { CakeOrdersComponent } from './cake-orders/cake-orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"",
    component:LandingViewComponent
  },
  {
    path:"home",
    component:LandingViewComponent
  },
  {
    path:"item-detail/:id",
    component:ItemDetailComponent,
    canDeactivate:[canDeactivateGuard]
  },
  {
    path:"login",
    component:AdminComponent
  },
  {
    path:"cake-order",
    component:CakeOrdersComponent,
    canActivate:[authGuard]
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
