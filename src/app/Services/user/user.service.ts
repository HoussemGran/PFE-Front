import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  private URL = "http://localhost:3000/users";

  allUsers():Observable<any>{
    return this.http.get(this.URL);
  }

  createUser(user):Observable<any>{
    return this.http.post(this.URL,user);
  }

  findUser(id:string):Observable<any>{
    return this.http.get(this.URL+"/"+id);
  }

  updateUser(id:string , user):Observable<any>{
    return this.http.patch(this.URL+"/"+id,user);
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete(this.URL+"/"+id)
  }

}
