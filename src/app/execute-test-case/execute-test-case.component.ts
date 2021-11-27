import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExecutionService } from '../Services/execution/execution.service';
import { TestCaseService } from '../Services/testCase/test-case.service';

@Component({
  selector: 'app-execute-test-case',
  templateUrl: './execute-test-case.component.html',
  styleUrls: ['./execute-test-case.component.css']
})
export class ExecuteTestCaseComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute,
    private executionService : ExecutionService,
    private testCaseService : TestCaseService
    ) { }

  
  executeForm : FormGroup;
  history;
  lastExecution = []
  bgColor;
  testCaseTitle;

  ngOnInit(): void {

    this.testCaseService.findTestCase(this.testCaseID).subscribe(response=>{
      this.testCaseTitle = response['title'];
    })

    this.executionService.getLastExecution(this.testCaseID).subscribe(response=>{
      console.log(response);
      if(response){
        this.lastExecution.push(response);  
      if(response['status'] == 'passed') this.bgColor = 'passed';
      else if(response['status'] == 'failed') this.bgColor = 'failed';
      else this.bgColor = 'blocked';

      }
    })

   /*  this.executionService.getExecutionHistory(this.testCaseID).subscribe(response=>{
      console.log(response);
      this.history = response;
      this.date = response[0]['dateRun'];

    }) */

    this.executeForm = new FormGroup({
      projectID : new FormControl(null),
      testPlanID : new FormControl(null),
      testCaseID : new FormControl(null),
      build : new FormControl(null),
      runBy : new FormControl(null),
      notes : new FormControl(null),
      status : new FormControl("")
    })

  }

  testPlan = localStorage.getItem('testplan');
  platform;

  testCaseID = this.activeRoute.snapshot.paramMap.get('id');
  testplanID = localStorage.getItem("planID");
  projectID = localStorage.getItem('projectID')
  build = localStorage.getItem("build");
  runBy = localStorage.getItem('login');
  state = "";

  
  submit(event){
    
    const state = event.submitter.name;

    this.state = state;

    console.log(event.submitter.name);

    if(state == "passed"){
      const myobj = {...this.executeForm.value,status:'passed'};
      this.executionService.execute(myobj).subscribe(response=>{
        console.log(response);
        location.reload();
      })

  }
    else if(state == "failed"){
      const myobj = {...this.executeForm.value,status:'failed'};
      this.executionService.execute(myobj).subscribe(response=>{
        console.log(response);
        location.reload();
      })

    }else{
      const myobj = {...this.executeForm.value,status:'blocked'};
      this.executionService.execute(myobj).subscribe(response=>{
        console.log(response);
        location.reload();
      })
    }

  }
  


}
