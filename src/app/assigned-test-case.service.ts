import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignedTestCaseService {

  constructor(private http : HttpClient) { }

  

  getAssignedTestCases(){

  return this.http.get("http://localhost:3000/assigned-test-case")

  }


}
