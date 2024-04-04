import { Component, OnInit, ViewChild } from '@angular/core';
import { CakeRequestService } from '../services/cake-request.service';
import { MatTableDataSource } from '@angular/material/table';
import { users } from '../models/users';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cake-orders',
  templateUrl: './cake-orders.component.html',
  styleUrls: ['./cake-orders.component.css']
})
export class CakeOrdersComponent implements OnInit {

  displayedColumns: string[] = ['fname', 'email', 'phone', 'state','city','landmark','pincode','cakeName','deliverydate','quantity','totalamount'];
  cakeOrder!:MatTableDataSource<users>;
  
  constructor(private cake_request:CakeRequestService){}
  @ViewChild('paginator') paginator!: MatPaginator;
  ngOnInit(): void {
    this.cake_request.getCakeRequest().subscribe({
      next:data=>{
        this.cakeOrder = new MatTableDataSource(data);
        this.cakeOrder.paginator = this.paginator;
        this.cakeOrder.paginator.length = data.length;
      }
    })
  }
}
