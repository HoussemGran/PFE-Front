import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  constructor(private http : HttpClient) { }

  private URL = "http://localhost:3000/library";

  fetchLib(){
    return this.http.get(this.URL);
  }

  importTestCase(body){
    return this.http.post(this.URL+'/importTC',body);
  }

  createTestCase(testCase){
    return this.http.post(this.URL+'/testCase',testCase);
  } 

  createTestSuite(testSuite){
    return this.http.post(this.URL+'/testSuite',testSuite);
  }

  deleteTestCase(id){
    return this.http.delete(this.URL+'/testCase/'+id);
  }

  deleteTestSuite(id){
    return this.http.delete(this.URL+"/testSuite/"+id);
  }

}
