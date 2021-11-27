import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestProjectService {

  constructor(private http : HttpClient) { }
  URL = "http://localhost:3000/test-project";

  allTestProjects():Observable<any>{
    return this.http.get("http://localhost:3000/test-project");
  }

  createTestProject(project):Observable<any>{
    return this.http.post("http://localhost:3000/test-project",project);
  }

  createTestSuite(testSuite):Observable<any>{
    console.log(testSuite);
    return this.http.post(this.URL+"/TS",testSuite);
  } 

  deleteTestSuite(testSuiteID:string):Observable<any>{
    return this.http.delete(this.URL+"/TS/"+testSuiteID)
  }

  deleteTestCase(testCaseID : string):Observable<any>{
    return this.http.delete(this.URL+'/TC/'+testCaseID)
  }

  createTestCase(testCase):Observable<any>{
    return this.http.post(this.URL+"/TC",testCase);
  }

  fetchKeywords(projectID){
    return this.http.get(this.URL+'/keywords/'+projectID);
  }

  fetchPlatforms(projectID){
    return this.http.get(this.URL+'/platforms/'+projectID);
  }
  
  findTestProject(id):Observable<any>{
    return this.http.get("http://localhost:3000/test-project/"+id);
  }

  updateTestProject(id,project):Observable<any>{
    return this.http.patch("http://localhost:3000/test-project/"+id,project);
  }

  findTestProjectByName(name:string):Observable<any>{
    return this.http.get("http://localhost:3000/test-project/test/"+name);
  }

  deleteTestProject(id):Observable<any>{
    return this.http.delete("http://localhost:3000/test-project/"+id);
  }  

}
                    