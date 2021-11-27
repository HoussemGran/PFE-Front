import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestSuiteService } from '../Services/testSuite/test-suite.service';

@Component({
  selector: 'app-update-test-suite',
  templateUrl: './update-test-suite.component.html',
  styleUrls: ['./update-test-suite.component.css']
})
export class UpdateTestSuiteComponent implements OnInit {

  addTestSuite : FormGroup

  constructor(private testSuiteService : TestSuiteService ,
  private route : Router,  
  private router : ActivatedRoute) { }

  id = this.router.snapshot.paramMap.get('id');

  ngOnInit(): void {

    this.addTestSuite = new FormGroup({
      name:new FormControl(null,Validators.required),
      details:new FormControl,
      projectID:new FormControl,
      planID:new FormControl
    })

    this.testSuiteService.findTestSuite(this.id).subscribe(response=>{
      this.name = response['name'];
      this.details = response['details'];
    })


  }

  name;
  details;
  projectID = localStorage.getItem('projectID');

  submit(){
    console.log(this.addTestSuite.value);
    if(this.addTestSuite.valid){
      this.testSuiteService.updateTestSuite(this.id,this.addTestSuite.value).subscribe(
        res => {
          console.log(res)
          this.route.navigate(['admin/testspecification']);  
        },
          err => console.log(err)
      )
    }

  }

}
