import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { UserServService } from 'src/app/user-serv.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { catchError, map, tap  } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private userserv:UserServService;
  constructor(private http: HttpClient) { }
  users:any;
  user={
    username:String,
    email:String,
    password:String,
    lastname:String,
    firstname:String
  }
  ngOnInit() {
    
  }
  show() {
   
       return this.http.get("/user/2")
       .subscribe(users=>{console.log(users);});
  }
  add2(
    username: string, email: string,password:String,lastname:String, firstname:String
   ){
     
    this.userserv.addUser( username,email,password,lastname,firstname)
      
  }
  add(
    username: string, email: string,password:String,lastname:String, firstname:String) {
      
    
    this.http.post("/api/user", {password,lastname,firstname, username,email} as User )
      .subscribe(User => {console.log(User)});
  }
  private body = new HttpParams()
  .set('username', 'onetap')
  .set('password', '123456');

  checkLogin(){
       return this.http.post("/api/user",
          this.body.toString(),
          {
            headers: new HttpHeaders()
              .set('Content-Type', 'application/json')
          }
        )};
      
  delete(){
    return this.http.delete("/api/user/2", httpOptions)
    .subscribe(users => {console.log(users);});
  } 
}
