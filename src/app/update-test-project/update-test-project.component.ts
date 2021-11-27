import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestProjectService } from '../Services/testProject/test-project.service';

@Component({
  selector: 'app-update-test-project',
  templateUrl: './update-test-project.component.html',
  styleUrls: ['./update-test-project.component.css']
})
export class UpdateTestProjectComponent implements OnInit {

  constructor(private testProjectService : TestProjectService ,
  private route : ActivatedRoute , private router:Router) { }

  myProject;
  id = this.route.snapshot.paramMap.get('id');
  form : FormGroup;

  projectData;

  ngOnInit(): void {
    console.log(this.id);
    
    this.testProjectService.findTestProject(this.id).subscribe(response=>{
      this.myProject = response;
      this.active = response.active;
      this.Public = response.public;
      this.nameValue = response.name;
      this.prefixValue = response.prefix;
      this.descriptionValue = response.description;
        
    })

  }
  active;
  Public;
  nameValue;
  prefixValue;
  descriptionValue;
  

  submit(form){
    
    console.log(form.value);
    this.testProjectService.updateTestProject(this.id,form.value).subscribe(response=>{
      console.log(response);
      this.router.navigate(['/admin/testproject'])
    })

  }

}
