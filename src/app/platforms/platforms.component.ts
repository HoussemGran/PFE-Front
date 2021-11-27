import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../Services/platform/platform.service';
import { TestProjectService } from '../Services/testProject/test-project.service';


export interface platform{
  platform:string;
  description:string;
  onDesign:boolean;
  onExecution:boolean;
}


@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {

  constructor(private platformService : PlatformService,
    private projectService : TestProjectService
    ) { }

  DATA : any = []
  data:any;
  projectID = localStorage.getItem('projectID');

  ngOnInit(): void {

    this.projectService.fetchPlatforms(this.projectID).subscribe(response=>{
      console.log(response);
      this.DATA = response;
    })

  }

  delete(id){
    this.platformService.deletePlatform(id).subscribe(response=>{
      console.log(response);
      location.reload();
    })
  }

  displayedColumns: string[] = ['platform','description','onDesign','onExecution','delete'];
  dataSource = this.DATA;


}
