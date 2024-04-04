import { Component, OnInit } from '@angular/core';
import { item } from '../models/item';
import { ItemServiceService } from '../services/item-service.service';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  
  constructor(private itemservice:ItemServiceService){
  }
  searchText:string='';
  searchByCategory:string='';
  items:item[]=[];


  searched($event:any){
    this.searchText=$event;
    console.log(`searched->searchText: ${this.searchText}`);
    this.getItemsFiltered();
  }
  searchCategory($event:any){
    this.searchByCategory=$event;
    console.log(`searchCategory-> searchByCategory: ${this.searchByCategory}`);
   this.getItemsFiltered();
  }

  private getItemsFiltered(){
    this.itemservice.getItems().subscribe({
      next: data => {
        console.log(`getitemsfiltered->searchByCategory: ${this.searchByCategory}`);
        console.log(`getitemsfiltered->searchText: ${this.searchText}`);
        if(this.searchText!==""){
          this.items = data.filter((item) =>item.title?.toLowerCase().includes(this.searchText.toLowerCase()));
          console.log(`if(this.searchText!="")->pass: ${this.items}`);
        }else{
          this.items=data;
          console.log(`if(this.searchText!="")->else: ${this.items}`);
        }
    
        if (this.searchByCategory) {
          this.items = this.items.filter((item) =>
            item.category?.toLowerCase().startsWith(this.searchByCategory.toLowerCase())
          );
        }
      },
      error: error => {
        alert('Failed to Fetch Notes Due to Server Error !!');
      }
    });
  }

  ngOnInit(): void {
    this.itemservice.getItems().subscribe({
      next:data=>{
        this.items=data;
      },
      error:error=>{
        alert('Failed to Fetch Notes Due to Server Error !!');
      }
    })

    
  }

}
