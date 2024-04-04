import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent {
@Output() onSearchByCategory:EventEmitter<string>=new EventEmitter<string>();
searchByCategoryText: string='';
searchCategory(){
  this.onSearchByCategory.emit(this.searchByCategoryText);
}
}
