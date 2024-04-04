import { Component } from '@angular/core';
import { RouteServiceService } from '../services/route-service.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  pageNotFoundInstance:boolean=true;
  constructor(private routerService:RouteServiceService){

  }

}
