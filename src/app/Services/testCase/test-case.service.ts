import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestCaseService {

  constructor(private http : HttpClient) { }
  URL = "http://localhost:3000/test-case";

  createTestCase(testCase){
    return this.http.post(this.URL,testCase);
  }

  fetchAll(){
    return this.http.get(this.URL);
  }

  findTestCase(id:string){
    return this.http.get(this.URL+"/"+id);
  }

  deleteTestCase(id:string){
    return this.http.delete(this.URL+"/"+id);
  }

  updateTestCase(id:string,newTestCase){
    return this.http.patch(this.URL+"/"+id,newTestCase);
  } 

  appendKeyword(keyword){
    return this.http.post(this.URL+'/keyword',keyword);
  }

  appendPlatform(platform){
    return this.http.post(this.URL+'/platform',platform);
  }

  findByProjectID(projectID){
    return this.http.get(this.URL+'/project/'+projectID);
  }
  
}
