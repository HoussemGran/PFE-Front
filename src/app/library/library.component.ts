import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LibService } from '../Services/library/lib.service';
import { TestCaseService } from '../Services/testCase/test-case.service';
import { TestSuiteService } from '../Services/testSuite/test-suite.service';
import { TestCaseDialogComponent } from '../test-case-dialog/test-case-dialog.component';
import { TestCaseComponent } from '../test-case/test-case.component';
import { TestSuiteDialogComponent } from '../test-suite-dialog/test-suite-dialog.component';

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
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private libService : LibService , 
    private testCaseService : TestCaseService,
    private testSuiteService : TestSuiteService,
    public MyDialog : MatDialog) { }

  addTestSuite : FormGroup;
  addTestCase : FormGroup;

  ngOnInit(): void {

    this.addTestSuite = new FormGroup({
      name:new FormControl(null,Validators.required),
      details:new FormControl,
    })

    this.addTestCase = new FormGroup({

      title: new FormControl(null,Validators.required),
      preconditions: new FormControl(null),
      summary:new FormControl(null),
      status:new FormControl(null,Validators.required),
      importance:new FormControl(null,Validators.required),
      type:new FormControl(null,Validators.required),
      duration:new FormControl,
        

    })

    this.libService.fetchLib().subscribe((data)=>{
      console.log(data);
      console.log(data['TestCase'])
     this.testSuites = data['TestSuite'];
     this.testCases = data['TestCase'];
    })  
      
  }

  submitTestSuite(){
    if(this.addTestSuite.valid){

      this.libService.createTestSuite(this.addTestSuite.value).subscribe(response=>{
        console.log(response);
        location.reload();
      })

    }
  }

  submitTestCase(){

    if(this.addTestCase.valid){
      this.libService.createTestCase(this.addTestCase.value).subscribe(response=>{
        console.log(response);
        location.reload();
      })
    }

  }

  dialogTC(event){
   const id = event._value[0];
    console.log(id);
    this.testCaseService.findTestCase(id).subscribe(response=>{
      console.log(response);
      this.MyDialog.open(TestCaseDialogComponent,{
        data : {
          testCase : response
        },
        minWidth:"500px"
      });
    })
  }

  dialogTS(event){
    const id = event._value[0];

    this.testSuiteService.findTestSuite(id).subscribe(response=>{
      this.MyDialog.open(TestSuiteDialogComponent,{
        data : {
          testSuite : response
        },
        minWidth:'500px'
      })
    })

  }

  testSuites;
  testCases;
  selectedStatus = 1;

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



}
