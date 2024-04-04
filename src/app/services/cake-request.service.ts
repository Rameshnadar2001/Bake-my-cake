import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class CakeRequestService {
  userUrl:string=" http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  addCakeRequest(creq:users):Observable<users>{
     return this.http.post<users>(this.userUrl,creq);
  }
  getCakeRequest():Observable<users[]>{
    return this.http.get<users[]>(this.userUrl);
  }
}
