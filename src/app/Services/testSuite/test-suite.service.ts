import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestSuiteService {

  constructor(private http : HttpClient) { }

  private URL = "http://localhost:3000/test-suite";

  createTestSuite(testSuite){
    return this.http.post(this.URL,testSuite);
  }

  fetchAll(){
    return this.http.get(this.URL);
  }

  findTestSuite(id:string){
    return this.http.get(this.URL+'/'+id);
  }

  deleteTestSuite(id:string){
    return this.http.delete(this.URL+"/"+id);
  }

  deleteKeyword(body){
    return this.http.post(this.URL+"/delkeyword",body);
  }

  updateTestSuite(id:string,newTestSuite){
    return this.http.patch(this.URL+"/"+id,newTestSuite);
  }

  

}
