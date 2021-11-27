import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestPlanService {

  constructor(private http : HttpClient) { }

  private URL = "http://localhost:3000/test-plan";
  private URL2 = "http://localhost:3000/assigned-test-case";
  private URL3 = "http://localhost:3000/execution";
  

  allTestPlan():Observable<any>{
    return this.http.get(this.URL);
  }

  assignTestCase(body){
    return this.http.post(this.URL2,body);
  }

  findTestPlanAssigned(testCaseID:string){
    return this.http.get(this.URL2+'/'+testCaseID);
  }

  allTestPlanAssigned(){
    return this.http.get(this.URL2)
  }

  findTestPlanByProject(id:string){
    console.log(id);
    return this.http.get(this.URL+"/all/"+id);
  }

  findTestPlan(id:string):Observable<any>{
    return this.http.get(this.URL+"/"+id);
  }

  findTestplanByName(name:string):Observable<any>{
    return this.http.get(this.URL+"/byName/"+name);
  }

  createTestPlan(testPlan):Observable<any>{
    return this.http.post(this.URL,testPlan);
  }

  updateTestPlan(id,testPlan):Observable<any>{
    return this.http.patch(this.URL+"/"+id,testPlan);
  }

  deleteTestPlan(id):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

  deleteAssignedTestPlan(id){
    return this.http.delete(this.URL2+'/'+id);
  }

  deleteExecution(id){
    return this.http.delete(this.URL3+'/'+id);
  }

}
