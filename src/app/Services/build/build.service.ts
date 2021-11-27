import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private http : HttpClient) { }
    
  private  URL = "http://localhost:3000/builds"; 

  createBuild(build){
    return this.http.post(this.URL,build);

  }

  

}
