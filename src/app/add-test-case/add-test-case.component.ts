import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestCaseService } from '../Services/testCase/test-case.service';
import { TestProjectService } from '../Services/testProject/test-project.service';

interface Status {
  title:string
  value:number
}

interface Importance{
  title:string;
  value:string
}

interface Type{
  title:string;
  value:string;
}


@Component({
  selector: 'app-add-test-case',
  templateUrl: './add-test-case.component.html',
  styleUrls: ['./add-test-case.component.css']
})
export class AddTestCaseComponent implements OnInit {

  addTestCase:FormGroup;

  constructor(private testProjectService : TestProjectService,
  private route : ActivatedRoute,
  private testCaseService : TestCaseService , private location:Location) { }

  ngOnInit(): void {

    console.log(this.testSuiteID);

    this.addTestCase = new FormGroup({

      title: new FormControl(null,Validators.required),
      preconditions: new FormControl(null),
      summary:new FormControl(null),
      status:new FormControl(null,Validators.required),
      importance:new FormControl(null,Validators.required),
      type:new FormControl(null,Validators.required),
      duration:new FormControl,
      projectID:new FormControl,
      testSuiteID:new FormControl,  

    })

  } 

  projectID = localStorage.getItem('projectID');
  testSuiteID = this.route.snapshot.paramMap.get('id');
  

  selectedStatus = 1;
  initialImportance = 'M';
  initialType = 'M';

  statusChange(e){
    this.selectedStatus = e.value;
  }

  status : Status[] = [
  {title:'Draft',value:1},
  {title:'Ready for review',value:2},
  {title:'Review in progress',value:3},
  {title:'Rework',value:4},
  {title:'Obsolete',value:5},
  {title:'Future',value:6},
  {title:'Final',value:7}
  ];

  importance : Importance[] = [
  {title:'High',value:'High'},
  {title:'Medium',value:'Medium'},
  {title:'Low',value:'Low'}
];

  types: Type[] = [
    {title:'Manual',value:'Manual'},
    {title:'Automated',value:'Automated'}
  ];

  submit(){

    if(this.addTestCase.valid){
      console.log(this.addTestCase.value)
      this.testProjectService.createTestCase(this.addTestCase.value).subscribe(response=>{
        console.log(response)
        this.location.back();
      })

    }

  }

}
