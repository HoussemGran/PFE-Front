import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(private http : HttpClient) { }
  private URL = "http://localhost:3000/keywords";

  createKeyword(keyword){
   return this.http.post(this.URL,keyword);
  }

  fetchAll(){
    return this.http.get(this.URL);
  }

  findKeyword(id:string){
    return this.http.get(this.URL+"/"+id);
  }

  deleteKeyword(id:string){
    return this.http.delete(this.URL+"/"+id);
  }

  updateKeyword(id:string,newKeyword){
    return this.http.patch(this.URL+"/"+id,newKeyword);
  }
}
