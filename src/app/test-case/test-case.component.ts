import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { KeywordDialogComponent } from '../keyword-dialog/keyword-dialog.component';
import { PlatformDialogComponent } from '../platform-dialog/platform-dialog.component';
import { KeywordService } from '../Services/keyword/keyword.service';
import { PlatformService } from '../Services/platform/platform.service';
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
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css']
})
export class TestCaseComponent implements OnInit {

  constructor(private testCaseSevice : TestCaseService , 
    private projectService : TestProjectService,
    private activeRoute : ActivatedRoute,
    private router : Router,
    private dialog : MatDialog 
    ) { }

  private testCaseID = this.activeRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {

   this.testplanID = localStorage.getItem('planID');

    console.log(this.testCaseID);
    this.testCaseSevice.findTestCase(this.testCaseID).subscribe(response=>{
      console.log(response);
      this.testCase = response;
      this.selectedStatus = response['status']
      this.selectedImportance = response['importance'];
      this.selectedType = response['type'];
      this.duration = response['duration'];
    })

    this.projectService.fetchKeywords(this.projectID).subscribe(response=>{
      console.log(Object.values(response))
      this.keywords = Object.values(response);
    })

    this.projectService.fetchPlatforms(this.projectID).subscribe(response=>{
      console.log(response);
      this.platforms = Object.values(response);
    })

  }

  projectID = localStorage.getItem('projectID');
  testCase;
  selectedStatus;
  selectedImportance;
  selectedType;
  duration;
  testplanID;
  keywords = [];
  platforms = [];


  delete(){

    this.projectService.deleteTestCase(this.testCaseID).subscribe(res=>{
      console.log(res)
      this.router.navigate(['admin/testspecification']);
    })
    

  }


  addKeyword(){

    this.dialog.open(KeywordDialogComponent,{
      data:{keywords:this.keywords,testCaseID:this.testCaseID},
      minWidth:'500px'
    })

  } 

  addPlatform(){
    this.dialog.open(PlatformDialogComponent,{
      data:{platforms:this.platforms,testCaseID:this.testCaseID},
      minWidth:'500px'
    })
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

    redirect(){
        this.router.navigateByUrl('admin/testspecification/testcase/:id/addtotestplan');
    }

}
