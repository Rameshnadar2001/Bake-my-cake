import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http:HttpClient) { }
  itemsUrl:string='http://localhost:3000/items';
  getItems():Observable<item[]>{
    return this.http.get<item[]>(this.itemsUrl);
  }
  getItem(id:number):Observable<item>{//id
   return this.http.get<item>(`${this.itemsUrl}/${id}`);
  }
}
