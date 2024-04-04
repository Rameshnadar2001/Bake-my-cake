import { Component, OnInit } from '@angular/core';
import { item } from '../models/item';
import { ActivatedRoute } from '@angular/router';
import { ItemServiceService } from '../services/item-service.service';
import { users } from '../models/users';
import { CakeRequestService } from '../services/cake-request.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouteServiceService } from '../services/route-service.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  pricee?:number;
  users:users={
    cakeName:"hello",
    adress:{
     landmark:undefined
    },
    orderInformation:{
      quantity:1,
      totalamount:0
    }
  };

 item?:item={};
 itemCategory:string='';
 orderStatus:boolean=false;
 itemName?:string;
 constructor(private activatedRoute:ActivatedRoute,private itemService:ItemServiceService,
  private cakerequestService:CakeRequestService,private _snackBar:MatSnackBar,private routerService:RouteServiceService){}
 ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params=>{
   let id=params.get("id") ?? 0;
   this.itemService.getItem(+id).subscribe(data=>{
    this.item=data;
    this.pricee=data.price;
    console.log(data.price);
    this.itemName=data.title;
    
    this.itemCategory =data.category as string;
   })
 }
 )
}


canDeactivate(){
  if(this.orderStatus)
  {
    return true;
  }
  else{
   this.orderStatus= confirm("Changes are not saved. Do you still want to Leave?");
    return this.orderStatus;
  }
}


onSubmit(orderForm:any){
  let tquantity=orderForm.value.quantity;
  orderForm.value.totalamount=tquantity *this.pricee!;
  this.users=orderForm.value;
  this.users.cakeName=this.itemName;
 console.log(this.users);
 this.orderStatus=true;

this.cakerequestService.addCakeRequest(this.users).subscribe({
  next:data=>{
    this.routerService.toHome();
    this._snackBar.open('Order submitted successfully', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
},
error:err=>{
  this._snackBar.open('Failure while connecting to server, try again!!','Not Found',{
    duration:3000,
    panelClass:['mat-toolbar','mat-warn']
  });
 }
})

}
}
