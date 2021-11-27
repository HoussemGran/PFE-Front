import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExecutionService {

  constructor(private http : HttpClient) { }

  private URL = "http://localhost:3000/execution";

  execute(obj){
    return this.http.post(this.URL,obj);
  } 

  getAll(){
    return this.http.get(this.URL);
  }

  getExecutionHistory(testCaseID : string){
    return this.http.get(this.URL+'/'+testCaseID);
  }

  getLastExecution(testCaseID : string){
    return this.http.get(this.URL+'/lastOne/'+testCaseID);
  }

}
