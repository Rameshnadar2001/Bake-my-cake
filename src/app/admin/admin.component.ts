import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';
import { RouteServiceService } from '../services/route-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private fb:FormBuilder,private authService:AuthserviceService,private routeService:RouteServiceService){
  }

 invalidsec:boolean=false;
  
  adminLogin=this.fb.group(
    {
      securityCode:['',[Validators.required]]
    },{validator:this.adminValidator}
  );
  get securityCode(){
    return this.adminLogin.get("securityCode");
  }
  onSubmit(c:AbstractControl){
    const secCode= c.get("securityCode")?.value;
  
    if(this.authService.login(secCode)){
      this.routeService.toCakeOrder();
      console.log("Passed");
    }else{
     
      this.routeService.toLogin();
    }
  }
 
 adminValidator(c:AbstractControl){
  const secCode= c.get("securityCode")?.value;
  if(secCode!=='')
  {
    if(secCode!=="admin")
   {
     return {invalidSeccode:true};
   }
  }
    return null;
 }
 

}
