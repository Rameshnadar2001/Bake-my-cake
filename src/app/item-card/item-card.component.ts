import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { item } from '../models/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
 @Input() item?:item;
 itemCategory:string='';
 
ngOnInit():void{
  this.itemCategory = this.item!.category as string;
}

}
