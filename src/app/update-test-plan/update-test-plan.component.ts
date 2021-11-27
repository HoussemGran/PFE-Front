import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestPlanService } from '../Services/testPlan/test-plan.service';

@Component({
  selector: 'app-update-test-plan',
  templateUrl: './update-test-plan.component.html',
  styleUrls: ['./update-test-plan.component.css']
})
export class UpdateTestPlanComponent implements OnInit {


  constructor(private router : Router , private activeRouter : ActivatedRoute ,
              private testPlanService : TestPlanService) { }

  id = this.activeRouter.snapshot.paramMap.get('id');
  newTestPlan;
  ngOnInit(): void {

    this.testPlanService.findTestPlan(this.id).subscribe(response=>{
      console.log(response);  
      this.nameValue = response.name;
      this.descriptionValue = response.description;
      this.active = response.active;
      this.Public = response.Public;

    })

  } 

  projectID = localStorage.getItem('selectedProject');
  nameValue
  descriptionValue
  active
  Public

  submit(form){
    console.log(form);
    this.testPlanService.updateTestPlan(this.id , form.value).subscribe(response=>{
      console.log(response);
      this.router.navigate(['/admin/testplan'])
    })
  }

}
