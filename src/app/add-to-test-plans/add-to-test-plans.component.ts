import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestCaseService } from '../Services/testCase/test-case.service';
import { TestPlanService } from '../Services/testPlan/test-plan.service';

@Component({
  selector: 'app-add-to-test-plans',
  templateUrl: './add-to-test-plans.component.html',
  styleUrls: ['./add-to-test-plans.component.css'],
})
export class AddToTestPlansComponent implements OnInit {
  constructor(
    private testPlanService: TestPlanService,
    private testCaseService: TestCaseService,
    private activeRoute: ActivatedRoute,
    private location: Location
  ) {}

  form: FormGroup;
  testCaseID;
  testPlanID;

  ngOnInit(): void {
    this.testCaseID = this.activeRoute.snapshot.paramMap.get('id');
    this.testPlanID = localStorage.getItem('planID');

    this.testPlanService
      .findTestPlanByProject(localStorage.getItem('projectID'))
      .subscribe((response) => {
        //console.log(response);
        this.testPlans = response;
      });

    this.testCaseService.findTestCase(this.testCaseID).subscribe((response) => {
      this.testCase = response;
    });

    this.testPlanService
      .findTestPlanAssigned(this.testCaseID)
      .subscribe((response) => {
        console.log(response);

        for (let i = 0; i < Object.keys(response).length; i++) {
          this.assignedTestPlans.push(response[i]['testPlan']);
        }
      });

    console.log(this.assignedTestPlans);
  }

  assignedTestPlans = [];
  build = localStorage.getItem('build');
  testPlans;
  testCase;
  prefix = localStorage.getItem('prefix');
  targetPlans = new Set();
  obj;

  onChange(e, item) {
    if (!this.targetPlans.has(item._id)) {
      this.targetPlans.add(item._id);
    } else {
      this.targetPlans.delete(item._id);
    }

    console.log(this.targetPlans);
  }

  submit() {
    if (this.targetPlans.size > 0) {
      for (let item of this.targetPlans) {
        this.obj = {
          build: this.build,
          testPlan: item,
          testCase: this.testCaseID,
          testSuite: this.testCase['testSuiteID'],
        };

        this.testPlanService.assignTestCase(this.obj).subscribe((response) => {
          console.log(response);
          this.location.back();
        });
      }
    }
  }
}
