import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { AssignedTestCaseService } from '../assigned-test-case.service';
import { ExecutionService } from '../Services/execution/execution.service';
import { TestCaseService } from '../Services/testCase/test-case.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  passed = 0
  failed = 0
  blocked = 0 ;
  notRun = 0

  allTestCases;
  runTestCases;

  constructor(private executionService : ExecutionService,
      private testCaseService : TestCaseService,
      private assignedTestCaseService : AssignedTestCaseService
    ) {
    Chart.register(...registerables);
   }

  ngOnInit(): void {

    this.assignedTestCaseService.getAssignedTestCases().subscribe(response=>{
      this.allTestCases = Object.keys(response).length;
      console.log(response);
    })

    this.executionService.getAll().subscribe(response=>{
      this.runTestCases = Object.keys(response).length;
      const arr = [...Object.values(response)];
      console.log(arr);
      this.runTestCases = Object.keys(response).length;

      arr.map(item=>{
        if(item.status == 'passed') this.passed++;
        else if(item.status == 'failed') this.failed++;
        else this.blocked++;
      })
      this.notRun = Math.abs(this.runTestCases - this.allTestCases);

      this.myChart();
    })

   
  

  }
  
  myChart(){
    let myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
          labels: ['Passed', 'Failed' ,'Blocked', 'Not run'],
          datasets: [{
              
              data: [this.passed, this.failed, this.blocked, this.notRun],
              backgroundColor: [
                  'darkgreen',
                  'darkred',
                  'darkblue',
                  'white'
              ],
              hoverOffset: 2
              
          }]
      },
  });
  }

}
