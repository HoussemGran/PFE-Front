import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestPlanService } from '../Services/testPlan/test-plan.service';

@Component({
  selector: 'app-add-test-plan',
  templateUrl: './add-test-plan.component.html',
  styleUrls: ['./add-test-plan.component.css']
})
export class AddTestPlanComponent implements OnInit {

  constructor(private testPlanService :  TestPlanService , private router:Router) { }
  
  projectID = localStorage.getItem('projectID');

  addProjectForm : FormGroup

  ngOnInit(): void {

    this.addProjectForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      description:new FormControl,
      active:new FormControl,
      Public:new FormControl,
      projectID:new FormControl,
    })
  }


  submit(){

    if(!this.addProjectForm.valid){
      return;
    }else{
      this.testPlanService.createTestPlan(this.addProjectForm.value).subscribe(response=>{
        localStorage.setItem('planID',response['_id']);
        console.log(response);
        this.router.navigate(['/admin/testplan']);
      })

    }

  }

}
