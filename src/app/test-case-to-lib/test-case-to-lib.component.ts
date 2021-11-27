import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibService } from '../Services/library/lib.service';


interface DialogData {
  testSuiteID: string,
  testCaseID : string 
}

@Component({
  selector: 'app-test-case-to-lib',
  templateUrl: './test-case-to-lib.component.html',
  styleUrls: ['./test-case-to-lib.component.css']
})
export class TestCaseToLibComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : DialogData, 
    private libService : LibService
    ) { }

  testSuiteID;
  testCases;
  ngOnInit(): void {

    this.testSuiteID = this.data.testSuiteID;
    this.libService.fetchLib().subscribe((response) => {
      this.testCases = response['TestCase'];
      console.log(this.testCases);
    });
  }

  save(items){
    for (let item of items) {
      const testCase = item._value;
      const body = {testCaseID : testCase._id , testSuiteID : this.testSuiteID}
       this.libService.importTestCase(body).subscribe(response=>{
        console.log(response);
        location.reload();
      })
    }
  }


}
