import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() onSearch:EventEmitter<string>=new EventEmitter<string>();
  searchText:string='';
  search() {
    this.onSearch.emit(this.searchText);
  }
}
