import { Component, OnInit } from '@angular/core';
import { TestProjectService } from '../Services/testProject/test-project.service';

@Component({
  selector: 'app-test-project-info',
  templateUrl: './test-project-info.component.html',
  styleUrls: ['./test-project-info.component.css']
})
export class TestProjectInfoComponent implements OnInit {

  constructor(private projectService : TestProjectService) { }


  ngOnInit(): void {

    this.projectService.findTestProject(localStorage.getItem('projectID')).subscribe(
      response=>{
        this.projectName = response.name;
        this.projectDescription = response.description;
        this.projectID = response._id
      }
    )

  }

  projectName;
  projectDescription;
  projectID;

}
