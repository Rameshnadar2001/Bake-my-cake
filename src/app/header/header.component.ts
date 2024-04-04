import { Component, Input } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { RouteServiceService } from '../services/route-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerTitle:string='Bake my cake'
  isLoggedIn: boolean=this.authservice.isLoggedIn;
  constructor(private authservice:AuthserviceService,private routerservice:RouteServiceService){}
  logout(){
    this.authservice.logout();
    this.routerservice.toHome();
    
  }
}
