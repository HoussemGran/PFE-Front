import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http : HttpClient) { }


  addUser(user){
    return this.http.post("http://localhost:3000/user",user).subscribe(response=>{
      console.log(response);
      return response;
    })
  }
  
}
