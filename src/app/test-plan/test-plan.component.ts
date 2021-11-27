import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestPlanService } from '../Services/testPlan/test-plan.service';

export interface Elements{
  name:string;
  description:string;
}

@Component({
  selector: 'app-test-plan',
  templateUrl: './test-plan.component.html',
  styleUrls: ['./test-plan.component.css']
})
export class TestPlanComponent implements OnInit {

  constructor(private testPlanService : TestPlanService , private router:Router) { }

  DATA : any = []
  data:any;
  
  ngOnInit(): void {

     this.testPlanService.findTestPlanByProject(localStorage.getItem('projectID')).subscribe(
      
      res =>{
        console.log(res)
        this.DATA =res;
        if(Object.keys(res).length ==0){
          this.router.navigate(['/admin/testplan/add']);
        }
        
      },
      err =>{console.log(err)}
    )

  }

  delete(id){

    this.testPlanService.deleteTestPlan(id).subscribe(response=>{
      
      console.log(response)
      localStorage.removeItem('testplan');
      localStorage.removeItem('planID');
      localStorage.removeItem('testPlanID');
      this.testPlanService.deleteAssignedTestPlan(id).subscribe(res=>{
        console.log(res);
      })
      this.testPlanService.deleteExecution(id).subscribe(res=>{
        console.log(res);
      })  
      
      location.reload();
    })


  }


  displayedColumns: string[] = ['name','description','delete','execute'];
  dataSource = this.DATA;

}
