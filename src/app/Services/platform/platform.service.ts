import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private http : HttpClient) { }
  private URL = "http://localhost:3000/platforms";

  createPlatform(platform){
   return this.http.post(this.URL,platform);
  }

  fetchAll(){
    return this.http.get(this.URL);
  }

  findPlatform(id:string){
    return this.http.get(this.URL+"/"+id);
  }

  deletePlatform(id:string){
    return this.http.delete(this.URL+"/"+id);
  }

  updatePlatform(id:string,newPlatform){
    return this.http.patch(this.URL+"/"+id,newPlatform);
  }
}
