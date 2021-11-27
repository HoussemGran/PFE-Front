import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploadService } from '../Services/file/file-upload.service';
import { TestProjectService } from '../Services/testProject/test-project.service';
import { TestSuiteService } from '../Services/testSuite/test-suite.service';
import { TestCasesLibComponent } from '../test-cases-lib/test-cases-lib.component';
import {csv2json} from "csvjson-csv2json";

@Component({
  selector: 'app-test-suite',
  templateUrl: './test-suite.component.html',
  styleUrls: ['./test-suite.component.css']
})
export class TestSuiteComponent implements OnInit {

  constructor(private testSuiteService : TestSuiteService ,  
  private fileUploadService: FileUploadService,  
  public dialog : MatDialog,
  private projectService : TestProjectService, 
  private router : Router,  
  private route : ActivatedRoute) { }
  addFile : FormGroup;

  ngOnInit(): void {

    this.testSuiteID = this.route.snapshot.paramMap.get('id');  
    this.testSuiteService.findTestSuite(this.testSuiteID).subscribe(response=>{
      this.testSuite = response;
      this.testSuiteName = response['name'];
      this.testSuiteDetails = response['details'];
      this.keywords = response['keywords'];
    })

  }
projectID = localStorage.getItem('projectID');
testSuiteID;
testSuiteName = '';
testSuiteDetails = '';
testSuite;
keywords;
removable=true;
panelOpenState = false;
file: File = null;

  delete(){
    this.projectService.deleteTestSuite(this.testSuiteID).subscribe(response=>{
      this.router.navigate(['admin/testspecification']);
    } , err=>{
      console.log(err); 
    })
  }

  removeKeyword(keyword){
    const testSuiteID = this.route.snapshot.paramMap.get('id');
    // contruct the keyword info body
    const body = {'projectID':localStorage.getItem('projectID') , 'testSuiteID':testSuiteID ,
                  'keywordID':keyword['_id']        
                  }
                
    this.testSuiteService.deleteKeyword(body).subscribe(response=>{
      console.log(response);
    })              
    
  }

  openDialog(){

    this.dialog.open(TestCasesLibComponent,{
      width:'500px',
      data:{testSuiteID:this.testSuiteID}
    })

  } 

  onChange(event) {
    
    this.file = event.target.files[0];
}

onUpload() {

  let fileReader = new FileReader();

  fileReader.onload = (e)=>{
    //console.log(fileReader.result)
    const json = csv2json(fileReader.result,{parseNumber:true});
    console.log(json[0]);
    const myTC = json[0];

    myTC['projectID'] = this.projectID;
    myTC['testSuiteID'] = this.testSuiteID;

    console.log(myTC);

     this.projectService.createTestCase(myTC).subscribe(response=>{
      console.log(response);
      location.reload();
    })

  }
  fileReader.readAsText(this.file);
  
  
  
}

}
