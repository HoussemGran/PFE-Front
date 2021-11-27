import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestProjectService } from '../Services/testProject/test-project.service';

@Component({
  selector: 'app-add-test-project',
  templateUrl: './add-test-project.component.html',
  styleUrls: ['./add-test-project.component.css']
})
export class AddTestProjectComponent implements OnInit {

  constructor(private testProjectService : TestProjectService,
  private router : Router ) { }

  addProjectForm : FormGroup

  ngOnInit(): void {
    
    this.addProjectForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      prefix:new FormControl(null,Validators.required),
      description:new FormControl,
      active:new FormControl,
      public:new FormControl,

    })
  
  }

  submit(){

    if(!this.addProjectForm.valid){
      return;
    }else{
      console.log(this.addProjectForm.value);
      this.testProjectService.createTestProject(this.addProjectForm.value).subscribe(response=>{
        console.log(response);
        this.router.navigate(['/admin/testproject']);
      })

    }


  }

}
