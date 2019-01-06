import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap  } from 'rxjs/operators';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class UserServService {
  private baseurl = "/api/user";
 
  constructor(
    private http: HttpClient, public user: User
    ) { }
    users:any;
   
    /** POST: add a new hero to the server */
addUser  (username: string, email: string,password:String,lastname:String, firstname:String) {
  return this.http.post(this.baseurl, {password,lastname,firstname, username,email} as User).subscribe(users => {console.log(users);}); ;
}

}
