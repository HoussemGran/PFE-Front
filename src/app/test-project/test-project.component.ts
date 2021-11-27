import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ExecutionService } from '../Services/execution/execution.service';
import { TestPlanService } from '../Services/testPlan/test-plan.service';
import { TestProjectService } from '../Services/testProject/test-project.service';



export interface Elements{
  name:string;
  description:string;
  prefix:string;
}
 
@Component({
  selector: 'app-test-project',
  templateUrl: './test-project.component.html',
  styleUrls: ['./test-project.component.css']
})
export class TestProjectComponent implements OnInit {

  constructor(private testProjectService : TestProjectService , 
    private testPlanService : TestPlanService,
    private router : Router) { }
    
  DATA : Elements[] = []

  ngOnInit(): void {

    this.testProjectService.allTestProjects().subscribe(response=>{
    console.log(response)
    this.DATA = response;    
    })
  }

  delete(id){
    console.log(id);
    this.testProjectService.deleteTestProject(id).subscribe((response)=>{
      console.log(response);
      this.testPlanService.deleteExecution(id).subscribe(res=>{
        console.log(res);
      })  
      location.reload();
    })
  
  }

  displayedColumns: string[] = ['name','description','prefix','delete'];
  dataSource = this.DATA;
}
