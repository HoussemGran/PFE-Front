import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }


  authUser(login:string , password:string){
    const user = {login , password};
    return this.http.post("http://localhost:3000/login",user , {responseType:"text"})
    .pipe(
      catchError((err)=>{
        console.log(err);
        return throwError(err);
      })
    )
      
  }

}
