import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestProjectService } from '../Services/testProject/test-project.service';

@Component({
  selector: 'app-add-test-suite',
  templateUrl: './add-test-suite.component.html',
  styleUrls: ['./add-test-suite.component.css']
})
export class AddTestSuiteComponent implements OnInit {

  addTestSuite : FormGroup

  constructor(private testProjectService : TestProjectService , private router:Router) { }

  ngOnInit(): void {

    this.addTestSuite = new FormGroup({
      name:new FormControl(null,Validators.required),
      details:new FormControl,
      projectID:new FormControl,
    })

  }

  projectID = localStorage.getItem('projectID');

  submit(){

    if(this.addTestSuite.valid){
      this.testProjectService.createTestSuite(this.addTestSuite.value).subscribe(
        res=>{
          this.router.navigate(['admin/testspecification']);
        },
        err=>console.log(err)
      )
    }
    
    /* console.log(this.addTestSuite.value);
    if(this.addTestSuite.valid){
      this.testSuiteService.createTestSuite(this.addTestSuite.value).subscribe(
        res => {
          console.log(res)
          location.reload();
        },
          err => console.log(err)
      )
    } */

  }

}
