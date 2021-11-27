import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestCaseService } from '../Services/testCase/test-case.service';
import { TestCaseDialogComponent } from '../test-case-dialog/test-case-dialog.component';

@Component({
  selector: 'app-test-cases-guest',
  templateUrl: './test-cases-guest.component.html',
  styleUrls: ['./test-cases-guest.component.css']
})
export class TestCasesGuestComponent implements OnInit {

  constructor(private testCaseService : TestCaseService,
      public MyDialog : MatDialog
    ) { }
  testCases;
  projectID = localStorage.getItem('projectID')
  ngOnInit(): void {
    
    this.testCaseService.findByProjectID(this.projectID).subscribe(response=>{
      this.testCases = response;
    })
    
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
}
