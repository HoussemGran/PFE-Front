import { Component, OnInit } from '@angular/core';
import { AssignedTestCaseService } from '../assigned-test-case.service';
import { ExecutionService } from '../Services/execution/execution.service';
import { TestCaseService } from '../Services/testCase/test-case.service';
import { TestSuiteService } from '../Services/testSuite/test-suite.service';

@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.css']
})
export class ExecutionComponent implements OnInit {

  constructor(private assignedTestCaseService : AssignedTestCaseService,
    private testSuiteService : TestSuiteService,
    private testCaseService : TestCaseService,
    private executionService : ExecutionService
    ) { }

  ngOnInit(): void {

    this.assignedTestCaseService.getAssignedTestCases().subscribe(response=>{
      this.assignedTestCase = response;
      
      

      for(let i=0 ; i < Object.keys(response).length ; i++){
        let arr = [];
        let testSuiteName;
        let testCaseName;
        this.testSuiteService.findTestSuite(response[i]['testSuite']).subscribe(ts=>{
          testSuiteName = ts['name'];
          arr['testSuite'] = testSuiteName;
        })
        this.testCaseService.findTestCase(response[i]['testCase']).subscribe(tc=>{
          testCaseName = tc['title']; 
          arr['testCase'] = testCaseName 
          arr['testCaseID'] = tc['_id'];
          this.executionService.getLastExecution(tc['_id']).subscribe(response=>{
            arr['status'] = response['status'];
          })
        })
        this.myArray.push(arr);        
}
        console.log(this.myArray);  

    })
  }

  myArray = [];
  prefix = localStorage.getItem('prefix')
  assignedTestCase;
  build = localStorage.getItem('build');
  testplan = localStorage.getItem('testplan');
  planID = localStorage.getItem('planID');

}
