import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LibService } from '../Services/library/lib.service';
import { TestProjectService } from '../Services/testProject/test-project.service';

interface DialogData {
  testSuiteID: any
}


@Component({
  selector: 'app-test-cases-lib',
  templateUrl: './test-cases-lib.component.html',
  styleUrls: ['./test-cases-lib.component.css'],
})
export class TestCasesLibComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data : DialogData,
    private libService: LibService,
    private projectService: TestProjectService,
    private activeRouter: ActivatedRoute,
  ) {}

  testCases;
  projectID = localStorage.getItem('projectID');
  testSuiteID;

  ngOnInit(): void {
    this.testSuiteID = this.data.testSuiteID;
    console.log(this.testSuiteID);
    this.libService.fetchLib().subscribe((response) => {
      this.testCases = response['TestCase'];
      console.log(this.testCases);
    });
  }

  save(items) {
    for (let item of items) {
      const testCase = item._value;
      const mytestCase = {
        title: testCase.title,
        summary: testCase.summary,
        preconditions: testCase.preconditions,
        keywords: testCase.keywords,
        status: testCase.status,
        importance: testCase.importance,
        type: testCase.type,
        duration: testCase.duration,
        testSuiteID: this.testSuiteID,
        projectID: this.projectID,
      };
      console.log(mytestCase)
       this.projectService.createTestCase(mytestCase).subscribe(response=>{
        console.log(response);
        location.reload();
      })
    }
  }
}
